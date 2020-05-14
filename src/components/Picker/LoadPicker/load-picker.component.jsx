import React from "react";
import {Button, Grid } from "@material-ui/core";
import {ClearRounded, DescriptionRounded, ListRounded} from "@material-ui/icons";
import {useTranslation} from "react-i18next";
import {AlertDialog} from "../../index";
import {useStyles} from "./load-picker.styles";

const LoadPicker = ({ list, setList }) => {

	const [alertOpen, setAlertOpen] = React.useState(false);

	const {t} = useTranslation();
	const classes = useStyles();

	const handleClear = (answer) => {
		if (answer) { setList([]) }
		setAlertOpen(false);
	};

	const invokeClear = () => {
		setAlertOpen(true);
	};

	const buttons = [
		{ text: t("option.import"), action: () => {}, condition: true, icon: <DescriptionRounded/>},
		{ text: t("option.templates"), action: () => {}, condition: true, icon: <ListRounded/>},
		{ text: t("option.clear"), action: invokeClear, condition: (list.length === 0), icon: <ClearRounded/>}
	];

	return (
		<div className={classes.marginTop}>
			<AlertDialog open={alertOpen} onClose={handleClear}/>
			<Grid container spacing={1} >
				{buttons.map((b) =>
					<Grid item xs container justify={"center"} key={b.text}>
						<Button color="secondary" variant="contained" disabled={b.condition} onClick={b.action}>
							{b.icon}
							{b.text}
						</Button>
					</Grid>
				)}
			</Grid>
		</div>
	);

};

export default LoadPicker;