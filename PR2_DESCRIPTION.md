# Add automated broken link checker using Lychee

## Description

This PR implements automated broken link checking as discussed in issue #1521. It uses Lychee, the tool recommended in the issue discussion.

## Implementation Details

### Files Added

1. **`.github/workflows/broken-links.yml`** - GitHub Action workflow that:
   - Runs monthly (1st of each month at 9 AM UTC)
   - Can be triggered manually via workflow_dispatch
   - Builds the site before checking links
   - Creates a single issue if broken links are found

2. **`.lycheeignore`** - Configuration file to reduce false positives by excluding:
   - Social media URLs (often block automated tools)
   - Authentication-required pages
   - Local development URLs
   - Known problematic domains

### How It Works

1. **Build First**: The workflow builds the site to check actual output, not source files
2. **Comprehensive Checking**: Checks both internal and external links
3. **Smart Retries**: Retries failed requests up to 3 times with 20-second timeout
4. **Single Issue**: Creates one consolidated issue instead of multiple notifications
5. **Appropriate Labels**: Adds `bug`, `help wanted`, and `content` labels

### Configuration Choices

Based on the discussion in #1521:
- ✅ Uses Lychee as suggested by @p2635
- ✅ Runs periodically (monthly) rather than on every commit
- ✅ Creates a single issue to avoid notification spam
- ✅ Includes common exclusions to reduce false positives

## Testing

The workflow can be tested immediately after merging by:
1. Going to Actions tab
2. Selecting "Check for Broken Links" workflow
3. Clicking "Run workflow"

## Questions for Review

1. **Frequency**: Currently set to monthly. Would you prefer a different schedule?
2. **Assignees**: Currently assigns @ericwbailey and @scottohara. Should this be changed?
3. **Exclusions**: Are there other domains that commonly give false positives?
4. **Issue Title**: Currently "Monthly Broken Links Report". Preference for different naming?

## Related Issue

Resolves #1521

## Additional Notes

- The action won't fail the workflow even if broken links are found (uses `fail: false`)
- The report is in markdown format for easy reading
- Future enhancements could include caching to speed up checks