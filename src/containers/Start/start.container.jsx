import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {EntriesList, LoadPicker, StartButton, SystemPicker} from "../../components";

let backuplist = [];
let backupsystem = "s";

const StartContainer = () => {

	const [list, setList] = useState(backuplist);
	const [system, setSystem] = useState(backupsystem);

	console.log(system);

	useEffect(() => {
		backuplist = [...list];
		backupsystem = system;
	}, [list, system]);

	return (
		<Grid item container direction={"row"}>
			<Grid item md={12} lg={4}/>
			<Grid item xs={12} lg={4}>
				<LoadPicker list={list} setList={setList}/>
				<EntriesList list={list} setList={setList}/>
				<SystemPicker setSystem={setSystem}/>
				<StartButton list={list} systemCode={system}/>
			</Grid>
			<Grid item md={12} lg={4}/>
		</Grid>
	);
};

export default StartContainer;