# Fix broken internal link in Jammy award announcement

## Description

This PR fixes a broken internal link found while investigating issue #1478.

## Change Made

In `src/announcements/jammies-social-impact-award.md`:
- Changed from: `https://www.a11yproject.com/announcements/redesign/#eleventy`  
- Changed to: `/announcements/redesign/#eleventy`

## Why This Fix

Using relative paths for internal links:
- Works correctly regardless of the domain
- Follows the project's existing pattern
- Prevents broken links if the domain changes

## Related Issue

Partially addresses #1478 - Most other links from the original issue appear to have been fixed in previous PRs.