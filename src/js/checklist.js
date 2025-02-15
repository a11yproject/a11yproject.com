/* jshint esversion: 5 */

/** Used to check whether a given Element could match
 * by a DOM selector.
 * @see processChecklistClick
 */
 if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector;
}

/**
 * If someone opens the checklist page using a checklist item's "Share link" (ex: a11yproject.com/checklist/#validate-your-html) the item with the corresponding id will scroll into view. Then, if JS is enabled, this function will open its associated <details> element
 */
 function openLinkedCheckListItem() {
	var hash = window.location.hash.substr(1);
	var checklistItem =
		hash.length > 0 &&
		document.querySelector('[data-checklist-item-id="' + hash + '"]');

	if (checklistItem) {
		checklistItem.setAttribute("open", true);
	}
}
// Store checklist status ---------------------------------------------------
function storeChecklistItem(checkboxId) {
	localStorage.setItem(checkboxId, 'checked');
}

function removeChecklistItem(checkboxId) {
	localStorage.removeItem(checkboxId);
}

function processChecklistClick(checkboxSelector) {
	document.addEventListener("change", function(event) {
		var target = event.target;

		if (!target.matches(checkboxSelector)) {
			return;
		}

		if (target.checked) {
			storeChecklistItem(target.id);
		} else {
			removeChecklistItem(target.id);
	}
	});
}

function populateChecklistFromLocalStorage(checkboxSelector) {
	var items = document.querySelectorAll(checkboxSelector);
	var length = items.length;
	for (var i = 0; i < length; ++i) {
		var checkboxElement = items[i];
		checkboxElement.checked =
			localStorage.getItem(checkboxElement.id) === "checked";
	}
}

function processChecklist() {
	var checkboxSelector = '.c-checklist__checkbox input[type="checkbox"]';

	populateChecklistFromLocalStorage(checkboxSelector);
	processChecklistClick(checkboxSelector);
}
/**
 * Toggles all details elements within a container to a specific state
 * @param {HTMLElement} container - The container element
 * @param {boolean} shouldExpand - Whether to expand or collapse
 */
function toggleDetails(container, shouldExpand) {
    var details = container.querySelectorAll('details');
    var length = details.length;
    for (var i = 0; i < length; ++i) {
        if (shouldExpand) {
            details[i].setAttribute('open', '');
        } else {
            details[i].removeAttribute('open');
        }
    }
}

/**
 * Sets up toggle functionality for category and global controls
 */
function setupToggles() {
    var mainContent = document.querySelector('[data-content]');
    var toggleAllBtn = document.getElementById('toggle-all');
    var allExpanded = false;

    // Setup global toggle
    if (toggleAllBtn) {
        toggleAllBtn.setAttribute('aria-expanded', 'false');
        
        toggleAllBtn.addEventListener('click', function() {
            allExpanded = !allExpanded;
            toggleDetails(mainContent, allExpanded);
            toggleAllBtn.setAttribute('aria-expanded', allExpanded.toString());
            toggleAllBtn.textContent = allExpanded ? 'Close All' : 'Open All';
        });
    }

    // Setup category toggles
    var categoryToggles = document.querySelectorAll('.toggle-category');
    var length = categoryToggles.length;
    for (var i = 0; i < length; ++i) {
        var toggle = categoryToggles[i];
        toggle.setAttribute('aria-expanded', 'false');
        
        toggle.addEventListener('click', function(event) {
            var btn = event.currentTarget;
            var categorySection = btn.closest('[data-checklist-category]');
            var categoryName = categorySection.getAttribute('data-checklist-category');
            var isExpanded = btn.getAttribute('aria-expanded') === 'true';
            var newExpandedState = !isExpanded;
            
            toggleDetails(categorySection, newExpandedState);
            btn.setAttribute('aria-expanded', newExpandedState.toString());
            btn.textContent = newExpandedState ? 
                'Close ' + categoryName : 
                'Open ' + categoryName;
        });
    }
}

openLinkedCheckListItem();
processChecklist();
setupToggles();
