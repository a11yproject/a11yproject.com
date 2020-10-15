/**
 * Error handling for the Contact and Newsletter forms.
 */

/**
 * When the form is submitted, the `oninvalid` event will fire
 * and call this function for each required field that is empty or invalid.
 * @param {HTMLInputElement | HTMLTextAreaElement} input The input being validated.
 */
function handleInvalidField(input) {
	const inputID = input.getAttribute("id");

	const form = input.closest("form");

	const errorID = `${inputID}__error-message`;

	// Do not add an error for input if error already exists:
	if (form.querySelector(`#${errorID}`)) {
		return;
	}

	// Create error wrapper & list if wrapper doesn't exist, then prepend it to the form.
	// Otherwise find the existing error wrapper & list in the form:
	let errorWrapper;
	let errorList;
	if (!form.querySelector(".c-form__error-wrapper")) {
		errorWrapper = document.createElement("div");
		errorWrapper.classList = "c-form__error-wrapper";

		const errorSummary = document.createElement("span");
		errorSummary.classList = "c-form__error-summary";
		errorSummary.innerHTML = "There was a problem with the form.";
		errorWrapper.append(errorSummary);

		errorList = document.createElement("ul");
		errorList.classList = "c-form__error-list";
		errorWrapper.append(errorList);
		form.prepend(errorWrapper);
	} else {
		errorWrapper = form.querySelector(".c-form__error-wrapper");
		errorList = errorWrapper.querySelector(".c-form__error-list");
	}

	const label = form.querySelector(`label[for="${inputID}"]`);
	const labelID = label.getAttribute("id");

	const error = document.createElement("li");
	const errorLink = document.createElement("a");

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
 * @param {HTMLFormElement} form The submitted form.
 */
function cleanUpErrorAttributes(form) {
	const inputs = form.querySelectorAll(".c-form__input");
	const errorWrapper = form.querySelector(".c-form__error-wrapper");

	// Remove the entire error message wrapper, if it exists:
	if (errorWrapper) {
		form.removeChild(errorWrapper);
	}

	// Remove error attributes that may have been added on previous submit:
	inputs.forEach((input) => {
		const label = form.querySelector(`label[for="${input.getAttribute("id")}"]`);

		input.removeAttribute("aria-invalid");
		input.removeAttribute("aria-describedby");
		label.removeAttribute("aria-describedby");
	});
}

/**
 * Given a form HTML node, check if child inputs are valid.
 * @param {HTMLFormElement} form The submitted form.
 */
function validateFields(form) {
	form.querySelectorAll("input, textarea").forEach((input) => {
		// Simple email regex, meant to mimic HTML5 validation.
		// Checks if there's a character + @ + character.
		const isEmail = new RegExp(/[^@\s]+@[^@\s]+/g).test(input.value);

		// If email field, make sure entry is valid:
		if (input.type === "email" && !isEmail) {
			handleInvalidField(input);
		}

		// Remove white space on either side of string,
		// then check if field is empty.
		if (input.value.trim() === "") {
			handleInvalidField(input);
		}
	});
}

/**
 * When the form is submitted, clear out previous error state
 * and then validate fields. If all fields are valid, submit form.
 * @param {SubmitEvent} event The submit event of the form.
 */
function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.target.closest("form");

	// Clean up previous error state:
	cleanUpErrorAttributes(form);

	// Validate fields in the current submitted form:
	validateFields(form);

	// Only submit the form if no fields are invalid:
	if (form.querySelectorAll("[aria-invalid]").length > 0) {
		form.querySelector(".c-form__error-message:first-of-type a").focus();
		return false;
	} else {
		form.submit();
	}
}
