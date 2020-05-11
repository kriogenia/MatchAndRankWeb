import React from "react";
import {useTranslation} from "react-i18next";

const WelcomeContainer = () => {

	const {t} = useTranslation();

	return (
		<h1>{t("welcome")}</h1>
	);
};

export default WelcomeContainer;