/**
 * Error handling for the Contact and Newsletter forms.
 */

/**
 * When the form is submitted, the `oninvalid` event will fire
 * and call this function for each required field that is empty or invalid.
 */
function handleInvalidField(event) {
	var input = event.target;
	var inputID = input.getAttribute("id");

	var form = input.closest("form");

	var errorID = `${inputID}__error-message`;

	// Do not add an error for input if error already exists:
	if (form.querySelector(`#${errorID}`)) {
		return false;
	}

	// Create error wrapper & list if wrapper doesn't exist, then prepend it to the form.
	// Otherwise find the existing error wrapper & list in the form:
	let errorWrapper;
	let errorList;
	if (!form.querySelector(".c-form__error-wrapper")) {
		errorWrapper = document.createElement("div");
		errorWrapper.classList = "c-form__error-wrapper";
		errorList = document.createElement("ul");
		errorList.classList = "c-form__error-list";
		errorWrapper.prepend(errorList);
		form.prepend(errorWrapper);
	} else {
		errorWrapper = form.querySelector(".c-form__error-wrapper");
		errorList = errorWrapper.querySelector(".c-form__error-list");
	}

	// Create error summary if it doesn't exist & prepend it to the error wrapper,
	// otherwise find the existing error summary:
	let errorSummary;
	if (!errorWrapper.querySelector(".c-form__error-summary")) {
		errorSummary = document.createElement("span");
		errorSummary.classList = "c-form__error-summary";
		errorSummary.innerHTML = "There was a problem with the form.";
		errorWrapper.prepend(errorSummary);
	} else {
		errorWrapper = form.querySelector(".c-form__error-summary");
	}

	var label = form.querySelector(`label[for="${inputID}"]`);
	var labelID = label.getAttribute("id");

	var error = document.createElement("li");
	var errorLink = document.createElement("a");

	if (input.value.length === 0) {
		errorLink.innerHTML = `Please provide ${label.textContent.toLowerCase()}.`;
	} else {
		errorLink.innerHTML = `Please provide a valid entry for ${label.textContent.toLowerCase()}.`;
	}

	error.classList = "c-form__error-message";
	errorLink.setAttribute("id", errorID);
	errorLink.setAttribute("aria-describedby", labelID);
	errorLink.setAttribute("href", `#${inputID}`);
	error.appendChild(errorLink);
	errorList.appendChild(error);

	input.setAttribute("aria-describedby", errorID);
	input.setAttribute("aria-invalid", true);
}

/**
 * Given a form element, find and clean up any
 * error-related ARIA attributes that may
 * exist from a previous submit.
 */
function cleanUpErrorAttributes(form) {
	var inputs = form.querySelectorAll("input[aria-invalid]");

	if (!inputs) {
		return false;
	}

	[...inputs].forEach((input) => {
		var label = form.querySelector(`label[for="${input.getAttribute("id")}"]`);

		input.removeAttribute("aria-invalid");
		input.removeAttribute("aria-describedby");
		label.removeAttribute("aria-describedby");
	});
}

/**
 * When the form is submitted,
 * clear the error summary element.
 */
function handleFormSubmit(event) {
	var form = event.target.closest("form");
	var errorWrapper = form.querySelector(".c-form__error-wrapper");

	if (errorWrapper) {
		form.removeChild(errorWrapper);
	}

	cleanUpErrorAttributes(form);
}
