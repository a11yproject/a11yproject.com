/** Error handling for the Contact and Newsletter forms. */

const state = {
	formErrors: {},
	hasErrors: false,
};

const form = document.querySelector('form');

/**
 * When the form is submitted, clear out previous error state
 * and then validate fields. If all fields are valid, submit form.
 * @param {SubmitEvent} event The submit event of the form.
 */
function handleFormSubmit(event) {
	event.preventDefault();

	// Clean up previous error state:
	resetState(form);

	// Validate fields in the current submitted form:
	validateFields(form);

	if (state.hasErrors) {
		renderErrors(form);
		form.querySelector(".c-form__error-message:first-of-type a").focus();
		return false;
	} else {
		// Only submit the form if no fields are invalid:
		form.submit();
	}
}

/**
 * Reset the application state and remove
 * error-related ARIA attributes that may
 * exist from a previous submit.
 * @param {HTMLFormElement} form The submitted form.
 */
 function resetState(form) {
	const errorWrapper = form.querySelector(".c-form__error-wrapper");

	// Remove the entire error message wrapper, if it exists:
	if (errorWrapper) {
		form.removeChild(errorWrapper);
	}

	// Remove error attributes that may have been added on previous submit:
	for (const inputID in state.formErrors) {
		const input = state.formErrors[inputID].inputEl;
		input.removeAttribute("aria-invalid");
		input.removeAttribute("aria-describedby");
	}

	// Reset the application state to its default: no errors.
	state.hasErrors = false;
	state.formErrors = {};
}

/**
 * Check if a givem form's child inputs are valid.
 * @param {HTMLFormElement} form The submitted form.
 */
 function validateFields(form) {
	form.querySelectorAll("input, textarea").forEach(function(input) {
		// Simple email regex, meant to mimic HTML5 validation.
		// Checks if there's a character + @ + character.
		const isEmail = new RegExp(/[^@\s]+@[^@\s]+/g).test(input.value);

		// If email field, make sure entry is valid:
		if (input.type === "email" && !isEmail) {
			return storeError(input);
		}

		// Remove white space on either side of string,
		// then check if field is empty.
		if (input.value.trim() === "") {
			return storeError(input);
		}
	});
}


/**
 * Reads DOM information from invalid inputs, then stores it in memory
 * so it can be rendered later.
 *  @param {HTMLInputElement | HTMLTextAreaElement} input The invalid input.
*/
function storeError(input) {
	state.hasErrors = true;

	const inputID = input.getAttribute("id");
	const label = form.querySelector('label[for="' + inputID + '"]');
	const labelText = label.textContent.toLowerCase();

	state.formErrors[inputID] = {
		inputEl: input,
		labelID: label.id,
	};

	if (input.value.length === 0) {
		state.formErrors[inputID].message = 'Please provide' + labelText + '.';
	} else {
		state.formErrors[inputID].message = 'Please provide a valid entry for ' + labelText + '.';
	}
}

/**
 * Creates the DOM elements necessary to render the form's errors
 * to the user, and then prepend those elements to the form
 * to display them.
 * @param {HTMLFormElement} form The submitted form.
 */
function renderErrors(form) {
	// Create the DOM nodes that help display error information
	// to the users, and assend classes and content to them
	const errorWrapper = document.createElement("div");
	errorWrapper.classList = "c-form__error-wrapper";

	const errorSummary = document.createElement("span");
	errorSummary.classList = "c-form__error-summary";
	errorSummary.innerHTML = "There was a problem with the form.";

	const errorList = document.createElement("ul");
	errorList.classList = "c-form__error-list";

	// Loop through the errors in the application state,
	// and create DOM nodes for each error.
	for (const inputID in state.formErrors) {
		const formError = state.formErrors[inputID];
		const errorID = inputID + '__error-message';

		const errorListItem = document.createElement("li");
		const errorLink = document.createElement("a");

		errorLink.innerHTML = formError.message;
		errorListItem.classList = "c-form__error-message";
		errorLink.setAttribute("id", errorID);
		errorLink.setAttribute("aria-describedby", formError.labelID);
		errorLink.setAttribute("href", '#' + inputID);

		errorListItem.appendChild(errorLink);
		errorList.appendChild(errorListItem);

		formError.inputEl.setAttribute("aria-describedby", errorID);
		formError.inputEl.setAttribute("aria-invalid", true);
	}

	errorWrapper.append(errorSummary);
	errorWrapper.append(errorList);

	form.prepend(errorWrapper);
}
