import React from "react";
import {LinearProgress} from "@material-ui/core";
import {useStyles} from "./progress-bar.styles";

const ProgressBar = ({counter, expected}) => {

	const classes = useStyles();

	return (
		<LinearProgress variant="determinate" className={classes.bar}
						value={Math.min((counter - 1)/expected * 100, 100)} />
	);

};

export default ProgressBar;