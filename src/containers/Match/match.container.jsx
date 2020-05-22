import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {MatchPicker} from "../../components";

const MatchContainer = ({location}) => {

	const [counter, setCounter] = useState(1);
	const [currentMatch, setCurrentMatch] = useState();
	const [finished, setFinished] = useState(false);

	const system = location.system;

	// Component Did Update
	useEffect(() => {
		const match = system.nextMatch();
		if (match == null) {
			setFinished(true);
		} else {
			setCurrentMatch(match);
		}
	}, [counter, system]);

	const vote = (id) => {
		id === "a" ? system.voteLeft() : system.voteRight();
		setCounter(counter+1);
	}

	return (
		<Grid item container direction={"row"}>
			<Grid item md={12} lg={4}/>
			<Grid item xs={12} lg={4}>
				{/* Counter */}
				{currentMatch && <MatchPicker match={currentMatch} vote={vote} finished={finished}/>}
				{/* Progress */}
			</Grid>
			<Grid item md={12} lg={4}/>
		</Grid>
	);

};

export default MatchContainer;