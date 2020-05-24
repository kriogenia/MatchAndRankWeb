import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const WarningDialog = ({ children, open, onClose }) => {

	const {t} = useTranslation();

	return (
		<Dialog
			open={open}
			onClose={() => onClose()}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{t("alert.warning")}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{children}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => onClose()} color="secondary">
					{t("option.close")}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default WarningDialog;