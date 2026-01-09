#!/usr/bin/env python3
"""
Script to check and fix broken links for A11Y Project Issue #1478
Based on the broken links reported in the issue
"""

import os
import re
import glob
from urllib.parse import urlparse

# Broken links from issue #1478
BROKEN_LINKS = [
    # 404 errors
    "https://www.a11yproject.com/resources#development",
    "https://www.a11yproject.com/posts/never-use-auto-play",
    "https://www.a11yproject.com/events",
    "https://www.a11yproject.com/announcements",
    "https://www.a11yproject.com/resources#courses",
    "https://www.a11yproject.com/resources#professional-help",
    "https://www.a11yproject.com/resources#talks",
    "https://www.a11yproject.com/good-first-issues",
    
    # Bad host
    "http://www.karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do",
    "http://www.clarissapeterson.com/2012/11/html5-accessibility",
    "http://bitsofco.de/the-accessibility-cheatsheet",
    "http://blog.teamtreehouse.com/websites-commodities-unless-accessible",
    
    # Timeouts
    "https://thenewstack.io/accessibility-is-just-another-functional-test",
    "https://increment.com/development/a-guide-to-coding-accessible-developer-tools",
    "https://moz.com/blog/accessibility-seo-1"
]

# Common replacements for broken links
LINK_REPLACEMENTS = {
    # Update internal links to new paths
    "https://www.a11yproject.com/resources#development": "/resources/#development",
    "https://www.a11yproject.com/posts/never-use-auto-play": "/posts/never-use-auto-play/",
    "https://www.a11yproject.com/events": "/follow/",  # Events page was removed
    "https://www.a11yproject.com/announcements": "/announcements/",
    "https://www.a11yproject.com/resources#courses": "/resources/#courses",
    "https://www.a11yproject.com/resources#professional-help": "/resources/#professional-help",
    "https://www.a11yproject.com/resources#talks": "/resources/#talks",
    "https://www.a11yproject.com/good-first-issues": "/contribute/",  # Redirect to contribute page
    
    # Some external links might have moved - need to verify
    "http://www.karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do": "https://karlgroves.com/2013/09/05/the-6-simplest-web-accessibility-tests-anyone-can-do",
    "http://bitsofco.de/the-accessibility-cheatsheet": "https://bitsofco.de/the-accessibility-cheatsheet/"
}

def find_files_with_links():
    """Find all content files that might contain links."""
    patterns = [
        "src/**/*.md",
        "src/**/*.njk", 
        "src/**/*.json",
        "src/**/*.js"
    ]
    
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    
    return files

def check_file_for_broken_links(filepath):
    """Check a file for broken links and return findings."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return []
    
    findings = []
    
    # Look for each broken link
    for broken_link in BROKEN_LINKS:
        if broken_link in content:
            # Find line number
            lines = content.split('\n')
            for i, line in enumerate(lines):
                if broken_link in line:
                    findings.append({
                        'file': filepath,
                        'line': i + 1,
                        'link': broken_link,
                        'context': line.strip()
                    })
    
    return findings

def main():
    """Main function to find and report broken links."""
    print("🔍 Searching for broken links in A11Y Project...")
    print("=" * 60)
    
    files = find_files_with_links()
    print(f"Found {len(files)} files to check")
    
    all_findings = []
    
    for filepath in files:
        findings = check_file_for_broken_links(filepath)
        if findings:
            all_findings.extend(findings)
    
    if all_findings:
        print(f"\n📊 Found {len(all_findings)} instances of broken links:\n")
        
        # Group by link
        by_link = {}
        for finding in all_findings:
            link = finding['link']
            if link not in by_link:
                by_link[link] = []
            by_link[link].append(finding)
        
        # Report findings
        for link, findings in by_link.items():
            print(f"\n🔗 {link}")
            if link in LINK_REPLACEMENTS:
                print(f"   ✅ Suggested replacement: {LINK_REPLACEMENTS[link]}")
            else:
                print(f"   ⚠️  Needs manual verification")
            
            print(f"   Found in {len(findings)} location(s):")
            for finding in findings[:3]:  # Show first 3
                print(f"   - {finding['file']}:{finding['line']}")
                print(f"     Context: {finding['context'][:80]}...")
            
            if len(findings) > 3:
                print(f"   ... and {len(findings) - 3} more")
    
    else:
        print("\n✅ No broken links found in the codebase!")
    
    # Save report
    with open('broken_links_report.txt', 'w') as f:
        f.write("A11Y Project - Broken Links Report\n")
        f.write("=" * 50 + "\n\n")
        
        if all_findings:
            for link, findings in by_link.items():
                f.write(f"Link: {link}\n")
                if link in LINK_REPLACEMENTS:
                    f.write(f"Replacement: {LINK_REPLACEMENTS[link]}\n")
                f.write(f"Occurrences: {len(findings)}\n")
                f.write("Locations:\n")
                for finding in findings:
                    f.write(f"  - {finding['file']}:{finding['line']}\n")
                f.write("\n")
        else:
            f.write("No broken links found!\n")
    
    print(f"\n💾 Report saved to: broken_links_report.txt")

if __name__ == "__main__":
    main()