import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const AlertDialog = ({ text, onClose, open }) => {

	const {t} = useTranslation();

	const handleClose = (answer) => {
		onClose(answer);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{t("alert.confirm")}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant="outlined" onClick={() => handleClose(true)} color="primary">
					{t("option.yes")}
				</Button>
				<Button variant="outlined" onClick={() => handleClose(false)} color="secondary" autoFocus>
					{t("option.no")}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default AlertDialog;