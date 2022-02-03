/* jshint esversion: 5 */
/** Error handling for the Contact and Newsletter forms. */

var state = {
	formErrors: {},
	hasErrors: false,
};

var form = document.querySelector('form');

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
		form.querySelector('.c-form__error-message:first-of-type a').focus();
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
	var errorWrapper = form.querySelector('.c-form__error-wrapper');

	// Remove the entire error message wrapper, if it exists:
	if (errorWrapper) {
		form.removeChild(errorWrapper);
	}

	// Remove error attributes that may have been added on previous submit:
	for (var inputID in state.formErrors) {
		var input = state.formErrors[inputID].inputEl;
		input.removeAttribute('aria-invalid');
		input.removeAttribute('aria-describedby');
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
	form.querySelectorAll('input, textarea').forEach(function (input) {
		// Simple email regex, meant to mimic HTML5 validation.
		// Checks if there's a character + @ + character.
		var isEmail = new RegExp(/[^@\s]+@[^@\s]+/g).test(input.value);

		// Remove white space on either side of string,
		// then check if field is empty.
		if (input.value.trim() === '') {
			return storeError(input, 'EMPTY');
		}

		// If email field, make sure entry is valid:
		if (input.type === 'email' && !isEmail) {
			return storeError(input, 'INVALID');
		}

	});
}

/**
 * Reads DOM information from invalid inputs, then stores it in state,
 * so it can be rendered later.
 *  @param {HTMLInputElement | HTMLTextAreaElement} input The invalid input.
 *  @param {'EMPTY' | 'INVALID'} type The type of form error being recorded.
 */
function storeError(input, type) {
	state.hasErrors = true;

	var inputID = input.getAttribute('id');
	var label = form.querySelector('label[for="' + inputID + '"]');
	var labelText = label.textContent.toLowerCase();

	state.formErrors[inputID] = {
		inputEl: input,
	};

	if (type === 'EMPTY') {
		state.formErrors[inputID].message = 'Please provide ' + labelText + '.';
	}

	if (type === 'INVALID') {
		state.formErrors[inputID].message =
			'Please provide a valid entry for ' + labelText + '.';
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
	var errorWrapper = document.createElement('div');
	errorWrapper.classList = 'c-form__error-wrapper';

	var errorSummary = document.createElement('span');
	errorSummary.classList = 'c-form__error-summary';
	errorSummary.innerHTML = 'There was a problem with the form.';

	var errorList = document.createElement('ul');
	errorList.classList = 'c-form__error-list';

	// Loop through the errors in the application state,
	// and create DOM nodes for each error.
	for (var inputID in state.formErrors) {
		var formError = state.formErrors[inputID];
		var errorID = inputID + '__error-message';

		var errorListItem = document.createElement('li');
		var errorLink = document.createElement('a');

		errorLink.innerHTML = formError.message;
		errorListItem.classList = 'c-form__error-message';
		errorLink.setAttribute('id', errorID);
		errorLink.setAttribute('href', '#' + inputID);

		errorListItem.appendChild(errorLink);
		errorList.appendChild(errorListItem);

		formError.inputEl.setAttribute('aria-describedby', errorID);
		formError.inputEl.setAttribute('aria-invalid', true);
	}

	errorWrapper.append(errorSummary);
	errorWrapper.append(errorList);

	form.prepend(errorWrapper);
}
