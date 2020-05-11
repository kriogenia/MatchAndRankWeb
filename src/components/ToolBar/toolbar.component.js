import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import LanguageSelectorComponent from "../LanguageSelector";
import {useStyles} from "./styles";

const ToolBarComponent = () => {

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.widthAll}>
					Match'n'Rank
				</Typography>
				<Button color="inherit">
					Light/Dark
				</Button>
				<LanguageSelectorComponent/>
			</Toolbar>
		</AppBar>
	);

};

export default ToolBarComponent;