import React from "react";
import {Button, Tooltip} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const ToggleButton = ({children, onClick, tooltip}) => {

	const {t} = useTranslation();

	return (
		<Tooltip title={t(`tooltip.${tooltip}`)}>
			<Button color="inherit" onClick={onClick}>
				{children}
			</Button>
		</Tooltip>
	);

};

export default ToggleButton;