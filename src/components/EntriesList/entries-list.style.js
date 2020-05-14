import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	paper: {
		margin: "10px 0",
		padding: 20
	},
	form: {
		display: "flex",
		alignItems: "baseline",
		justifyContent: "space-evenly"
	},
	textfield: {
		width: "75%"
	}
}));