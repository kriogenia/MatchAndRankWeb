import React from "react";
import {
	Button,
	IconButton,
	List,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
	Paper,
	useMediaQuery,
	TextField
} from "@material-ui/core";
import {AddRounded, Delete} from "@material-ui/icons";
import { useTheme } from '@material-ui/core/styles';
import {useStyles} from "./entries-list.style";
import {useTranslation} from "react-i18next";

const EntriesListComponent = ({ list, setList }) => {

	const [input, setInput] = React.useState("");

	const {t} = useTranslation();
	const mobile = useMediaQuery(useTheme().breakpoints.up("sm"));
	const classes = useStyles();

	let counter = 0;

	const handleAdd = (e) => {
		e.preventDefault();
		if (input) {
			let entry = input;
			setInput("");
			setList([...list, {id: Date.now(), entry}]);
		}
	};

	const handleChange = ({ target: { value } }) => {setInput(value)};

	const handleDelete = (id) => setList((list) => list.filter((ex) => ex.id !== id));

	return (
		<Paper className={classes.paper}>
			<form onSubmit={handleAdd} className={classes.form}>
				<TextField name="input" label="Add" value={input} onChange={handleChange} margin="normal"
					className={classes.textfield}/>
				<Button color="primary" variant="contained" type={"submit"}>
					<AddRounded/>
					{mobile ? t("option.add") : null}
				</Button>
			</form>
			<List>
				{list.map(({ id, entry }) =>
					<ListItem key={id}>
						<ListItemText primary={`${++counter}. ${entry}`} />
						<ListItemSecondaryAction>
							<IconButton color="primary" onClick={() => handleDelete(id)}>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				)}
			</List>
		</Paper>
	);

};

export default EntriesListComponent;