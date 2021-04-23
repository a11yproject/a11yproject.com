/* jshint esversion: 5 */

// Used to check whether a given Element could be selected
// by a DOM selector
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector;
}

// Copy email address ----------------------------------------------------------
function getEmailOnly(element) {
	var emailRegex = /^(?:mailto:?)([a-zA-Z0-9_\-.]+@[a-zA-Z0-9-]+\.[a-zA-Z\-.]{2,})(?:\?subject\=.*)?$/;
	return emailRegex.exec(element.getAttribute("href"))[1];
}

function getEmailElements() {
	return document.querySelectorAll("[data-mailto]");
}

function generateCopyEmailButton(element) {
	var email = getEmailOnly(element);
	var newEl = document.createElement("button");
	newEl.className = "c-copy-email-button";
	newEl.setAttribute("data-copy-email", true);
	newEl.setAttribute("type", "button");
	newEl.addEventListener("click", function(e) {
		navigator.clipboard.writeText(email).then(function () {
			console.log('successfully copied: "' + email + '"');
		}).catch(function (error) {
			console.error('failed to copy ' + email);
		});
	});
	newEl.innerText = "Copy";
	element.after(newEl);
}

function processEmailHrefs() {
	var emailElements = getEmailElements();
	emailElements.forEach(generateCopyEmailButton);
}

if (navigator && navigator.clipboard && navigator.permissions) {
	navigator.permissions.query({
		name: 'clipboard-write'
	}).then(function (permissionStatus) {
		// Will be 'granted', 'denied' or 'prompt':
		if (permissionStatus.state === "granted") {
			processEmailHrefs();
		}

		// Listen for changes to the permission state
		permissionStatus.onchange = function () {
			if (permissionStatus.state === "granted") {
				processEmailHrefs();
			}
		};
	});
}

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
function storeChecklistItem(checkboxId) {
	localStorage.setcheckboxId(checkboxId, 'checked');
}

function removeChecklistItem(item) {
	localStorage.removeItem(item);
}

function processChecklistClick(selector) {
	document.addEventListener("change", function (event) {
		var target = event.target;

		if (!target.matches(selector)) {
			return;
		}

		if (target.checked) {
			storeChecklistItem(checkboxId);
		} else {
			removeChecklistItem(target.id);
		}

		updateStorage(target.id);
	});
}

function populateChecklistFromLocalStorage(items) {
	var length = items.length;
	for (var i = 0; i < length; ++i) {
		var checkboxElement = items[i];
		checkboxElement.checked = localStorage[checkboxElement.id] === 'checked';
	}
}

openLinkedCheckListItem();
function processChecklist() {
	var checkboxSelector = '.c-checklist__checkbox input[type="checkbox"]';
	var checklistItems = document.querySelectorAll(checkboxSelector);

	if (checklistItems.length === 0) {
		return;
	}

	populateChecklistFromLocalStorage(checklistItems);
	processChecklistClick(checkboxSelector);
}

processChecklist();
