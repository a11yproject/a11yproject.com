'use strict';

// Adds a skiplink after the post metadata, allowing you to skip the Table
// of Contents.
function skipToC() {
  var metadata = document.querySelector('#title');
  var tocSkipNav = document.createElement('a');

  tocSkipNav.innerHTML = 'Skip author and table of contents.';
  tocSkipNav.setAttribute('href', '#short-answer');
  tocSkipNav.setAttribute('class', 'c-skipnav');

  metadata.parentNode.insertBefore(tocSkipNav, metadata.nextSibling);
}

skipToC();
