/**
 * A global function that the theme toggle can use to apply the current theme.
 * @param {string} override The setting that needs to applied or undefined
 */
window.applyThemeSetting = function (override) {
	const currentSetting =
		override || localStorage.getItem("user-color-scheme") || "system";
	const currentThemeValue =
		document.documentElement.getAttribute("data-user-theme");

	if (currentSetting) {
		if (currentSetting !== currentThemeValue) {
			document.documentElement.setAttribute("data-user-theme", currentSetting);
		}
	}

	return currentSetting;
};
window.applyThemeSetting();
