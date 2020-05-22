import React from "react";
import {systemFactory} from "../../../models/";
import {Button, Typography} from "@material-ui/core";
import {useStyles} from "./start-button.styles";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const StartButton = ({list, systemCode}) => {

	const system = systemFactory(systemCode, list);
	const {t} = useTranslation();
	const classes = useStyles();

	return(
		<Link className={classes.link} to={ { pathname: "/match", system: system } }>
			<Button variant="contained" color="primary" size="large" className={classes.startButton}
				disabled={list.length < 3}>
				<div>
					<Typography variant="h5">
						{t("option.start")}
					</Typography>
					{ list.length >= 3 ?
						<Typography variant="subtitle1" className={classes.subtitle}>
							{`${t("alert.expected_matches")}: ${system.getExpectedMatches()}`}
						</Typography> :
						<Typography variant="subtitle1" className={classes.subtitle}>
							{t("alert.min_entries")}
						</Typography>
					}
				</div>
			</Button>
		</Link>
	);

};

export default StartButton;