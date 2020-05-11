import React from "react";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import Brightness4SharpIcon from '@material-ui/icons/Brightness4Sharp';
import LanguageSelectorComponent from "../LanguageSelector";
import {useStyles} from "./styles";

const ToolBarComponent = ({toggleLightMode}) => {

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.widthAll}>
					Match'n'Rank
				</Typography>
				<Button color="inherit" onClick={toggleLightMode}>
					<Brightness4SharpIcon/>
				</Button>
				<LanguageSelectorComponent/>
			</Toolbar>
		</AppBar>
	);

};

export default ToolBarComponent;