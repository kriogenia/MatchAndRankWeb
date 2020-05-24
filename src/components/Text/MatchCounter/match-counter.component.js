import React from "react";
import {useTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import {useStyles} from "./match-counter.styles";

const MatchCounter = ({counter, finished}) => {

	const {t} = useTranslation();
	const classes = useStyles();

	return (
		<Typography variant={"h3"} className={classes.text}>
			{ finished ?
				t("title.matches_completed") :
				`${t("title.match_counter")}${counter}`}
		</Typography>
	);

};

export default MatchCounter;