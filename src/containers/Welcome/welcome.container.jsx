import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {EntriesList, LoadPicker, SystemPicker} from "../../components";

let backuplist = [];

const WelcomeContainer = () => {

	const [list, setList] = useState(backuplist);
	const [system, setSystem] = useState();

	console.log(system);

	useEffect(() => {
		backuplist = [...list];
	}, [list]);

	return (
		<Grid item container direction={"row"}>
			<Grid item md={12} lg={4}/>
			<Grid item xs={12} lg={4}>
				<LoadPicker list={list} setList={setList}/>
				<EntriesList list={list} setList={setList}/>
				<SystemPicker setSystem={setSystem}/>
				{/* Botón de next */}
			</Grid>
			<Grid item md={12} lg={4}/>
		</Grid>
	);
};

export default WelcomeContainer;