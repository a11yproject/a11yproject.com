#!/usr/bin/env python3
"""
Comprehensive link checker to find and verify broken links
"""

import os
import re
import glob
import requests
from urllib.parse import urlparse, urljoin
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

# Regular expressions to find links
LINK_PATTERNS = [
    r'href=["\']([^"\']+)["\']',
    r'\[([^\]]+)\]\(([^)]+)\)',  # Markdown links
    r'"url":\s*"([^"]+)"',  # JSON URLs
]

def extract_links_from_file(filepath):
    """Extract all links from a file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return []
    
    links = []
    
    for pattern in LINK_PATTERNS:
        matches = re.findall(pattern, content)
        for match in matches:
            # Handle markdown links which return tuples
            if isinstance(match, tuple):
                link = match[1] if len(match) > 1 else match[0]
            else:
                link = match
            
            if link and not link.startswith('#'):
                links.append({
                    'url': link,
                    'file': filepath,
                    'line': find_line_number(content, link)
                })
    
    return links

def find_line_number(content, search_string):
    """Find the line number where a string appears."""
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if search_string in line:
            return i + 1
    return 0

def check_link(link_info, base_url='https://www.a11yproject.com'):
    """Check if a link is valid."""
    url = link_info['url']
    
    # Skip certain types of links
    if any(url.startswith(prefix) for prefix in ['mailto:', 'javascript:', 'tel:', '{{', '{%']):
        return None
    
    # Handle relative URLs
    if url.startswith('/'):
        # Internal link - check if file exists
        file_path = url.rstrip('/') + '.md'
        if url.endswith('/'):
            file_path = url + 'index.md'
        
        # Check various possible file paths
        possible_paths = [
            f"src{url}",
            f"src{url}.md",
            f"src{url}.njk",
            f"src{url}/index.md",
            f"src{url}/index.njk",
            f"src/posts{url}.md",
        ]
        
        for path in possible_paths:
            if os.path.exists(path.replace('//', '/')):
                return None  # File exists, link is good
        
        # If it's a fragment link to a section, might still be valid
        if '#' in url:
            base_path = url.split('#')[0]
            for path in possible_paths:
                base_check = path.replace(url, base_path)
                if os.path.exists(base_check.replace('//', '/')):
                    return None
        
        return {
            'url': url,
            'status': 'missing_file',
            'file': link_info['file'],
            'line': link_info['line']
        }
    
    # Skip external link checking for now (would need actual HTTP requests)
    if url.startswith('http'):
        return None
    
    return None

def main():
    """Main function to check all links."""
    print("🔍 Comprehensive Link Check for A11Y Project")
    print("=" * 60)
    
    # Find all content files
    patterns = [
        "src/**/*.md",
        "src/**/*.njk",
        "src/**/*.json"
    ]
    
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    print(f"Checking {len(files)} files for links...\n")
    
    # Extract all links
    all_links = []
    for filepath in files:
        links = extract_links_from_file(filepath)
        all_links.extend(links)
    
    print(f"Found {len(all_links)} total links to check\n")
    
    # Check internal links
    broken_links = []
    for link_info in all_links:
        result = check_link(link_info)
        if result:
            broken_links.append(result)
    
    # Report findings
    if broken_links:
        print(f"❌ Found {len(broken_links)} broken internal links:\n")
        
        for link in broken_links[:10]:  # Show first 10
            print(f"🔗 {link['url']}")
            print(f"   In: {link['file']}:{link['line']}")
            print(f"   Status: {link['status']}")
            print()
    else:
        print("✅ No broken internal links found!")
    
    # Focus on the specific links from issue #1478
    print("\n" + "=" * 60)
    print("📋 Checking specific links from Issue #1478...")
    
    issue_links = [
        "/resources#development",
        "/posts/never-use-auto-play",
        "/events",
        "/announcements",
        "/resources#courses",
        "/resources#professional-help", 
        "/resources#talks",
        "/good-first-issues"
    ]
    
    for link in issue_links:
        print(f"\nChecking: {link}")
        
        # Check if the base path exists
        base_path = link.split('#')[0] if '#' in link else link
        
        possible_files = [
            f"src{base_path}.njk",
            f"src{base_path}.md",
            f"src{base_path}/index.njk",
            f"src{base_path}/index.md"
        ]
        
        found = False
        for file_path in possible_files:
            if os.path.exists(file_path):
                print(f"  ✅ Found at: {file_path}")
                found = True
                break
        
        if not found:
            print(f"  ❌ Not found!")
            # Look for references to this missing page
            refs = []
            for link_info in all_links:
                if link in link_info['url']:
                    refs.append(f"    - {link_info['file']}:{link_info['line']}")
            
            if refs:
                print(f"  Referenced in:")
                for ref in refs[:3]:
                    print(ref)

if __name__ == "__main__":
    main()