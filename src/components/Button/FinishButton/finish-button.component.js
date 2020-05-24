import React, {useEffect, useState} from "react";
import {Button, Typography} from "@material-ui/core";
import {useStyles} from "./finish-button.styles";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const FinishButton = ({system}) => {

	const [results, setResults] = useState();

	const {t} = useTranslation();
	const classes = useStyles();

	useEffect(() => {
		let results = system.getResults().map((e) => { return {name: e.name, points: e.points}; });
		setResults(results);
	}, [system]);

	return(
		<Link className={classes.link} to={ { pathname: "/results", results: results } }>
			<Button variant="contained" color="primary" size="large" className={classes.finishButton}>
				<Typography variant="h5">
					{t("option.finish")}
				</Typography>
			</Button>
		</Link>
	);

};

export default FinishButton;