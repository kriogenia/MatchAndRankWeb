import React, {Fragment} from "react";
import {
	HashRouter as Router,
	Switch
} from "react-router-dom";
import { PublicLayout } from "./layouts";
import { Welcome } from "./containers";

/**
 * Manages the HashRouter and so, all the route navigation
 * @returns {div}	Layout with the nested component
 */
const Routes = () => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<PublicLayout component={Welcome} 		path={"/"} 			exact/>
					{/*<PublicLayout component={404} 		path="*"/>  */}
				</Switch>
			</Fragment>
		</Router>
	);
};

export default Routes;