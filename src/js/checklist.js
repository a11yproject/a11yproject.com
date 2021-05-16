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
	localStorage.setItem(checkboxId, "checked");
}

function removeChecklistItem(checkboxId) {
	localStorage.removeItem(checkboxId);
}

function processChecklistClick(checkboxSelector) {
	document.addEventListener("change", function (event) {
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

openLinkedCheckListItem();
processChecklist();

function toggleCheckList() {
	var toggleAllButton = document.querySelector("#toggle-all");
	var allDetails = document.querySelectorAll("details");
	toggleAllButton.addEventListener("click", function (event) {
		allDetails.forEach(function (checkListItem) {
			if (checkListItem.hasAttribute("open") === true) {
				checkListItem.removeAttribute("open");
			} else {
				checkListItem.setAttribute("open", true);
			}
		});
	});
}

function toggleChecklistGroup() {
	var toggleCategoryButtons = document.querySelectorAll(
		"[data-toggle-category]"
	);
	toggleCategoryButtons.forEach(function (element) {
		element.addEventListener("click", function (event) {
			var parentSection = element.closest("section");
			var detailsElements = parentSection.querySelectorAll("details");
			detailsElements.forEach(function (checkListItem) {
				if (checkListItem.hasAttribute("open") === true) {
					checkListItem.removeAttribute("open");
				} else {
					checkListItem.setAttribute("open", true);
				}
			});
		});
	});
}

/*Next Steps 
	loop for putting an event listener on all the toggle buttons 
	loop inside the click event listener that sets open to true, or if true sets to false
*/

toggleChecklistGroup();

toggleCheckList();
