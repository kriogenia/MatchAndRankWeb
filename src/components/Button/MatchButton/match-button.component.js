import React from "react";
import {Button, Typography, useMediaQuery} from "@material-ui/core";
import {useStyles} from "./match-button.styles";
import {useTheme} from "@material-ui/core/styles";

const MatchButton = ({color, finished, onClick, children}) => {

	const mobile = useMediaQuery(useTheme().breakpoints.up("sm"));
	const classes = useStyles();

	return (
		<Button variant="contained" color={color} size="large" disabled={finished}
				className={mobile ? classes.desktopButton : classes.mobileButton} onClick={onClick}>
			<div>
				<Typography variant="h5">
					{children}
				</Typography>
			</div>
		</Button>
	);

};

export default MatchButton;