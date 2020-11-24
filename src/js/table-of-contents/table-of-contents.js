/* jshint esversion: 5 */
/*! tableOfContents.js v1.0.0 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/table-of-contents */
/* Modified by Jeremy L. Wagner to add persistence via localStorage
/*
 * Automatically generate a table of contents from the headings on the page
 * @param  {String} content A selector for the element that the content is in
 * @param  {String} target  The selector for the container to render the table of contents into
 * @param  {Object} options An object of user options [optional]
 */
var tableOfContents = function (content, target, options) {
  //
  // Variables
  //
  // Get content
  var contentWrap = document.querySelector(content);
  var toc = document.querySelector(target);
  var enableTOCPersistence = 'localStorage' in window && toc !== null && toc.parentNode.nodeName === 'DETAILS';
  var idleCallbackAvailable = 'requestIdleCallback' in window;
  var tocKey = location.pathname;
  var tocState = [];
  var localStorageKey = 'TOCState';
  if (!contentWrap || !toc) return;
  // Settings & Defaults
  var defaults = {
    levels: 'h2, h3, h4, h5, h6',
    heading: 'Table of Contents',
    headingLevel: 'h2',
    listType: 'ol'
  };
  var settings = {};
  // Placeholder for headings
  var headings;
  //
  // Methods
  //
  /**
   * Merge user options into defaults
   * @param  {Object} obj The user options
   */
  var merge = function (obj) {
    for (var key in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, key)) {
        settings[key] = Object.prototype.hasOwnProperty.call(obj, key) ? obj[key] : defaults[key];
      }
    }
  };
  /**
   * Create an ID for a heading if one does not exist
   * @param  {Node} heading The heading element
   */
  var createID = function (heading) {
    if (heading.id.length) return;
    heading.id = 'toc_' + heading.textContent.replace(/[^A-Za-z0-9]/g, '-');
  };
  /**
   * Get the HTML to indent a list a specific number of levels
   * @param  {Integer} count The number of times to indent the list
   * @return {String}        The HTML
   */
  var getIndent = function (count) {
    var html = '';
    for (var i = 0; i < count; i++) {
      html += '<' + settings.listType + '>';
    }
    return html;
  };
  /**
   * Get the HTML to close an indented list a specific number of levels
   * @param  {Integer} count The number of times to "outdent" the list
   * @return {String}        The HTML
   */
  var getOutdent = function (count) {
    var html = '';
    for (var i = 0; i < count; i++) {
      html += '</' + settings.listType + '></li>';
    }
    return html;
  };
  /**
   * Get the HTML string to start a new list of headings
   * @param  {Integer} diff  The number of levels in or out from the current level the list is
   * @param  {Integer} index The index of the heading in the "headings" NodeList
   * @return {String}        The HTML
   */
  var getStartingHTML = function (diff, index) {
    // If indenting
    if (diff > 0) {
      return getIndent(diff);
    }
    // If outdenting
    if (diff < 0) {
      return getOutdent(Math.abs(diff));
    }
    // If it's not the first item and there's no difference
    if (index && !diff) {
      return '</li>';
    }
    return '';
  };
  /**
   * Adds an event listener to the TOC if localStorage is available
   */
  var bindTOCToggle = function () {
    toc.parentNode.addEventListener('toggle', function (event) {
      openState = event.target.getAttribute('open') === '';

      // We only check for the presence of the current page (tocKey) in the
      // tocState array to determine if the ToC needs to be closed, because the
      // default state for a ToC is to be open. The presence of the tocKey in
      // the array means the ToC has been shut.
      if (!openState) {
        if (tocState.indexOf(tocKey) === -1) {
          tocState.push(tocKey);
        }
      } else {
        var index = tocState.indexOf(tocKey);

        if (index > -1) {
          tocState.splice(index, 1);
        }
      }

      writeTOCState(tocState);
    });
  };
  /**
   * Writes the TOC state to localStorage
   */
  var writeTOCState = function () {
    var writeToStorage = function () {
      localStorage.setItem(localStorageKey, JSON.stringify(tocState));
    };

    // localStorage is a synchronous API that can block the main thread. If
    // requestIdleCallback is available, use that to defer writes to a period of
    // time in which the main thread is idle.
    if (idleCallbackAvailable) {
      requestIdleCallback(writeToStorage);

      return;
    }

    writeToStorage();
  };
  /**
   * Gets the initial state of the TOC
   */
  var initTOCPersistence = function () {
    // Get the TOC state from local storage
    initialTOCState = localStorage.getItem(localStorageKey);

    // Bind the toggle event on the TOC <details> element
    bindTOCToggle();

    // Check if there was a previous entry
    if (initialTOCState !== null) {
      tocState = JSON.parse(initialTOCState);
    }

    if (tocState.indexOf(tocKey) !== -1) {
      toc.parentNode.removeAttribute('open');
    }
  };
  /**
   * Inject the table of contents into the DOM
   */
  var injectTOC = function () {
    // Track the current heading level
    var level = headings[0].tagName.slice(1);
    var startingLevel = level;
    // Cache the number of headings
    var len = headings.length - 1;
    // Check if localStorage is available and if ToC persistence is needed.
    if (enableTOCPersistence) {
      // Intialize ToC persistence
      initTOCPersistence();
    }
    // Inject the HTML into the DOM
    toc.innerHTML =
      '<' + settings.headingLevel + '>' + settings.heading + '</' + settings.headingLevel + '>' +
      '<' + settings.listType + '>' +
      Array.prototype.map.call(headings, function (heading, index) {
        // Add an ID if one is missing
        createID(heading);
        // Check the heading level vs. the current list
        var currentLevel = heading.tagName.slice(1);
        var levelDifference = currentLevel - level;
        level = currentLevel;
        var html = getStartingHTML(levelDifference, index);
        // Generate the HTML
        html +=
          '<li>' +
          '<a href="#' + heading.id + '">' +
          '<span>' + heading.innerHTML.trim() + '</span>' +
          '</a>';
        // If the last item, close it all out
        if (index === len) {
          html += getOutdent(Math.abs(startingLevel - currentLevel));
        }
        return html;
      }).join('') +
      '</' + settings.listType + '>';
  };
  /**
   * Initialize the script
   */
  var init = function () {
    // Merge any user settings into the defaults
    merge(options || {});
    // Get the headings
    // If none are found, don't render a list
    headings = contentWrap.querySelectorAll(settings.levels);
    if (!headings.length) return;
    // Inject the table of contents
    injectTOC();
  };
  //
  // Initialize the script
  //
  init();
};
