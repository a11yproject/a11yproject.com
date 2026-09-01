# Fix broken link and implement automated link checking

This PR addresses issues #1478 and #1521 by:

1. **Fixing a broken internal link** (Issue #1478)
2. **Implementing automated broken link checking** (Issue #1521)

## Changes Made

### 1. Fixed Broken Link
- Fixed internal link in `src/announcements/jammies-social-impact-award.md`
- Changed from absolute URL: `https://www.a11yproject.com/announcements/redesign/#eleventy`
- To relative path: `/announcements/redesign/#eleventy`

### 2. Added Automated Link Checking
Implemented Lychee broken link checker as discussed in #1521:

- **`.github/workflows/broken-links.yml`**: GitHub Action that runs monthly
- **`.lycheeignore`**: Configuration to reduce false positives

## How the Link Checker Works

1. **Runs monthly** (1st of each month) or can be triggered manually
2. **Builds the site** first to check the actual output
3. **Checks all links** in the built site (internal and external)
4. **Creates a single issue** if broken links are found
5. **Handles common false positives** (social media, localhost, etc.)

## Configuration Details

The checker is configured to:
- Accept common redirect status codes (301, 302, etc.)
- Retry failed requests up to 3 times
- Use a 20-second timeout
- Exclude known problematic domains (social media sites that block bots)
- Create issues with appropriate labels

## Testing

To test the workflow:
1. The action can be manually triggered from the Actions tab
2. Or wait for the monthly run

## Questions for Maintainers

1. Should we adjust the frequency? (currently monthly)
2. Are there other domains that should be excluded?
3. Should different maintainers be assigned to the issues?

This implementation follows the discussion in #1521 about using Lychee and creating single issues rather than multiple notifications.

Resolves #1478 (partially - fixed one link, others appear already fixed)
Addresses #1521 (implements the requested broken link checker)