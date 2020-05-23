import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Paper
} from "@material-ui/core";
import {useStyles} from "./results-list.style";

const ResultsList = ({ results }) => {

	const classes = useStyles();

	let counter = 0;

	return (
		<Paper className={classes.paper}>
			<List>
				{results.map(({ name }) =>
					<ListItem key={name}>
						<ListItemText primary={`${++counter}. ${name}`} className={classes.entry}
							primaryTypographyProps={{
								color: counter % 2 === 0 ? "secondary" : "primary",
								variant: "h6"
							}}/>
					</ListItem>
				)}
			</List>
		</Paper>
	);

};

export default ResultsList;