import React, {useEffect, useState} from "react";
import {Button, FormControlLabel, Grid, Paper, Switch} from "@material-ui/core";
import {useTranslation} from "react-i18next";

let backupSelected = "standard";
let backupChecked = false;

const SystemPicker = ({setSystem}) => {

	const [selected, setSelected] = useState(backupSelected);
	const [checked, setChecked] = useState(backupChecked);

	const {t} = useTranslation();

	useEffect(() => {
		setSystem("generateSystem");
	}, [selected, checked, setSystem]);

	const handleCheck = () => {
		backupChecked = !checked;
		setChecked(backupChecked);
	};

	const handleSelect = (e) => {
		backupSelected = e.currentTarget.name;
		setSelected(backupSelected);
	};

	const options = ["standard", "fast"];

	return (
		<Paper>
			<Grid container spacing={1} >
				<Grid item xs container justify={"center"} alignItems={"center"}>
					{options.map((o) =>
						<Button color="primary" variant={selected === o ? "contained" : "outlined"}
								disabled onClick={handleSelect} name={o} key={o}>
							{t(`option.${o}`)}
						</Button>
					)}
				</Grid>
				<Grid item xs container justify={"center"}>
					<FormControlLabel
						control={<Switch checked={checked} onChange={handleCheck} disabled name="drawSwitch" />}
						label={t("option.draw")}
					/>
				</Grid>
			</Grid>
		</Paper>
	)

};

export default SystemPicker;