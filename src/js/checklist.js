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

function toggleChecklistGroup() {
	var toggleContentButton = document.querySelector("#toggle-content");
	var checkListItem =document.querySelector("[data-checklist-item-id='make-sure-that-button-a-and-label-element-content-is-unique-and-descriptive']");
	toggleContentButton.addEventListener("click", function(event) {
		var target = event.target;
		 checkListItem.setAttribute("open", true);
	});
}

/*Next Steps 
	find a way to not hard code the selector for the items - 
	find the parent that all the content details and then change the attribute for the details to open
	best way to use a querySelector 
*/
toggleChecklistGroup();
