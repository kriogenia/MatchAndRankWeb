import React from "react";
import {Route} from "react-router-dom";
import {Grid} from "@material-ui/core";
import {ToolBar} from "../../components";

/**
 * Builds a Route decorating the component with the NavBar and footer
 * @param props	Contains the Component and the path
 */
const PublicLayout = (props) => {

	const { component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			component={({ history, location, match }) => (
				<Grid container direction="column">
					<ToolBar/>
					<Component {...{ history, location, match }} />
					{/*<Footer/>*/}
				</Grid>
			)}
		/>
	);
};

export default PublicLayout;