import React from "react";
import {Button, Grid, Tooltip} from "@material-ui/core";
import {ClearRounded, DescriptionRounded, ListRounded} from "@material-ui/icons";
import {useTranslation} from "react-i18next";
import {ConfirmDialog} from "../../index";
import {useStyles} from "./load-picker.styles";

const LoadPicker = ({ list, setList }) => {

	const [alertOpen, setAlertOpen] = React.useState(false);

	const {t} = useTranslation();
	const classes = useStyles();

	const handleClear = (answer) => {
		if (answer) { setList([]); }
		setAlertOpen(false);
	};

	const invokeClear = () => {
		setAlertOpen(true);
	};

	const buttons = [
		{ name: "import", action: () => {}, condition: true, icon: <DescriptionRounded/>},
		{ name: "templates", action: () => {}, condition: true, icon: <ListRounded/>},
		{ name: "clear", action: invokeClear, condition: (list.length === 0), icon: <ClearRounded/>}
	];

	return (
		<div className={classes.marginTop}>
			<ConfirmDialog open={alertOpen} onClose={handleClear}/>
			<Grid container spacing={1} >
				{buttons.map((b) =>
					<Grid item xs container justify={"center"} key={b.name}>
						<Tooltip title={t(`tooltip.${b.name}`)}>
							<span>
								<Button color="secondary" variant="contained" disabled={b.condition} onClick={b.action}>
									{b.icon}
									{t(`option.${b.name}`)}
								</Button>
							</span>
						</Tooltip>
					</Grid>
				)}
			</Grid>
		</div>
	);

};

export default LoadPicker;