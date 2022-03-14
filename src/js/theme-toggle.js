/**
 * A lightweight, concise theme toggle that attaches state and events to button controls
 * with a [data-theme] attribute. When either one of these controls is clicked/tapped
 * or the state changes via another control, the appropriate [aria-pressed] value is applied
 */
(function themeToggle() {
	const buttons = document.querySelectorAll("button[data-theme]");
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
	 * Loop the buttons and set aria-pressed (active) state depending on current theme
	 * @param {string} passedSetting The setting that needs to applied or undefined
	 */
	const setStatus = (currentSetting) => {
		buttons.forEach((button) => {
			button.setAttribute(
				"aria-pressed",
				currentSetting === button.getAttribute("data-theme") ? "true" : "false"
			);
		});
	};

	// Set the initial state of the controls, prior to interaction
	setStatus(currentSetting);

	// Attach a click event to each button that grabs its [data-theme]
	// attribute and transmits that to the theme application script (in the head)
	// and sends it to the setStatus to apply the correct aria roles.
	buttons.forEach((button) => {
		button.addEventListener("click", (evt) => {
			evt.preventDefault();

			const setting = button.getAttribute("data-theme");

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
