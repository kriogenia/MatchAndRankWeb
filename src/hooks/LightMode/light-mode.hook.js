import { useState } from "react";
import themeObject from "../../theme";

const LightModeHook = () => {

	const [theme, setTheme] = useState(themeObject);

	const { palette: { type }} = theme;

	const toggleMode = () => {
		const updatedTheme = {
			...theme,
			palette: {
				...theme.palette,
				type: type === "light" ? "dark" : "light"
			}
		};
		setTheme(updatedTheme);
	};

	return [theme, toggleMode]

};

export default LightModeHook;