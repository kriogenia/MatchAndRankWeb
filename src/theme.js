import { createMuiTheme } from "@material-ui/core";
import {cyan, pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
	palette: {
		primary: {
			light: "#fa5788",
			main: pink[700],
			dark: "#8c0032",
			contrastText: "#fff",
		},
		secondary: {
			light: "#62efff",
			main: cyan[500],
			dark: "#008ba3",
			contrastText: '#000',
		},
	},
});

export default theme;