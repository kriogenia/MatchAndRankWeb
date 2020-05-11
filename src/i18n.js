import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend)				// loads translations
	.use(LanguageDetector)		// detects user language
	.use(initReactI18next) 		// passes i18n down to react-i18next
	.init({
		fallbackLng: "en", 		// use en if detected lng is not available
		debug: true,
		saveMissing: true,
		backend: {
			loadPath: process.env.PUBLIC_URL + "/locales/{{lng}}/{{ns}}.json",
			addPath: process.env.PUBLIC_URL + "/locales/{{lng}}/add/{{ns}}.missing.json",
			allowMultiLoading: true,
		},
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;