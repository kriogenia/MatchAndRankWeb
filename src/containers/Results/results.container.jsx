import React from "react";
import {Grid} from "@material-ui/core";
import {ResultsList} from "../../components/";

const ResultsContainer = ({location}) => {

	const results = location.results;

	return(
		<Grid item container direction={"row"}>
			<Grid item md={12} lg={4}/>
			<Grid item xs={12} lg={4}>
				<ResultsList results={results}/>
			</Grid>
			<Grid item md={12} lg={4}/>
		</Grid>
	);

};

export default ResultsContainer;