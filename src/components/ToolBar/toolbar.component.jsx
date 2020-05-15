import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Brightness4SharpIcon from "@material-ui/icons/Brightness4Sharp";
import {LanguagePicker, ToggleButton} from "../";
import {useStyles} from "./toolbar.styles";

const ToolbarComponent = ({toggleLightMode}) => {

	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" className={classes.widthAll}>
					Match'n'Rank
				</Typography>
				<ToggleButton onClick={toggleLightMode} tooltip="light_mode">
					<Brightness4SharpIcon/>
				</ToggleButton>
				<LanguagePicker/>
			</Toolbar>
		</AppBar>
	);

};

export default ToolbarComponent;