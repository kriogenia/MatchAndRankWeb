import * as React from "react";
import {Suspense} from "react";
import {HashLoader} from "react-spinners";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {setLightMode} from "./hooks";
import Routes from "./routes";
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

	const [theme, toggleMode] = setLightMode();
	const themeConfig = createMuiTheme(theme);

	return (
		<MuiThemeProvider theme={themeConfig}>
			<CssBaseline />
			<Suspense fallback={<HashLoader size={500}/>}>
				<Routes toggleLightMode={toggleMode} />
			</Suspense>
		</MuiThemeProvider>
	);
};

export default App;
