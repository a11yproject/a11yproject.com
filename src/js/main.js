/* jshint esversion: 5 */

// When someone navigates directly to a checklist item using its "Share Link"
// like a11yproject.com/checklist/#validate-your-html, the item with the
// matching id attribute will be scrolled into view. Then, if JS is enabled,
// this code will open its associated <details> element.
function openLinkedCheckListItem() {
	var checklistItems = document.querySelectorAll("[data-checklist-item-id]");

	checklistItems.forEach(function (item) {
		var shareLink = "#" + item.getAttribute("data-checklist-item-id");
		var isItemLinked = shareLink === document.location.hash;

		if (isItemLinked) {
			item.setAttribute("open", true);
		}
	});
}
// Store checklist status ---------------------------------------------------
function storeChecklistItems(item) {
	localStorage.setItem(item, 'checked');
}

function removeChecklistItems(item) {
	localStorage.removeItem(item);
}

function getChecklistItemVal(item) {
	return localStorage.getItem(item);
}

function checkChecklistExists(item) {
	return getChecklistItemVal(item) === 'checked';
}

function processChecklistClick(items) {
	items.forEach(function(element){
		element.addEventListener('change', function(event) {
			if (checkChecklistExists(event.target.id)) {
				removeChecklistItems(event.target.id);
			} else {
				storeChecklistItems(event.target.id);
			}
		});
	});
}

function renderLocalStorageItems(items) {
	items.forEach(function(element){
		if (checkChecklistExists(element.id)) {
			element.checked = true;
		}
	});
}

openLinkedCheckListItem();
function processChecklist() {
	var checklistItems = document.querySelectorAll('.c-checklist__checkbox input[type="checkbox"]');
	renderLocalStorageItems(checklistItems);
	processChecklistClick(checklistItems);
}

processChecklist();
