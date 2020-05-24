import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	desktopButton: {
		width: "45%",
		margin: "0 2.5%",
		overflowWrap: "anywhere"
	},
	mobileButton: {
		width: "100%",
		margin: "10px 0",
		overflowWrap: "anywhere"
	}
}));