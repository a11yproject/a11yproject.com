/**
 * A lightweight, concise theme toggle that attaches state and events to button controls
 * with a [data-theme] attribute. When either one of these controls is clicked/tapped
 * or the state changes via another control, the appropriate [aria-pressed] value is applied
 */
(function themeToggle() {
	const controls = document.querySelectorAll(
		"[data-theme-toggle] [type='radio']"
	);
	const storageKey = "user-color-scheme";
	const currentSetting = localStorage.getItem("user-color-scheme") || "system";

	/**
	 * Grabs the passed setting value (or current setting as fallback)
	 * and applies it where needed
	 * @param {string} passedSetting The setting that needs to applied or undefined
	 */
	const applySetting = (passedSetting) => {
		const settingToApply = passedSetting || currentSetting;

		if (settingToApply) {
			setStatus(settingToApply);
			window.applyThemeSetting(settingToApply);
		} else {
			setStatus("system");
		}
	};

	/**
	 * Loop the controls and set checked state depending on current theme
	 * @param {string} currentSetting The setting that needs to applied or undefined
	 */
	const setStatus = (currentSetting) => {
		controls.forEach((control) => {
			control.checked = currentSetting === control.value;
		});
	};

	// Set the initial state of the controls, prior to interaction
	setStatus(currentSetting);

	// Attach a change event to each control that grabs its value
	// and transmits that to the theme application script (in the head)
	// then sends it to the setStatus to apply the correct aria roles.
	controls.forEach((control) => {
		control.addEventListener("change", () => {
			// We don't need to process if not checked
			if (!control.checked) {
				return;
			}

			const setting = control.value;

			applySetting(setting);

			// We use a switch here because if system is selected, we clear out local storage
			switch (setting) {
				case "system":
					localStorage.removeItem(storageKey);
					break;
				default:
					localStorage.setItem(storageKey, setting);
					break;
			}
		});
	});
})();
