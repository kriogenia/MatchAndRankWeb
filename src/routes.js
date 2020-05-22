import React, {Fragment} from "react";
import {
	HashRouter as Router,
	Switch
} from "react-router-dom";
import { PublicLayout } from "./layouts";
import { Match, Start } from "./containers";

/**
 * Manages the HashRouter and so, all the route navigation
 * @returns {div}	Layout with the nested component
 */
const Routes = (props) => {
	return (
		<Router>
			<Fragment>
				<Switch>
					<PublicLayout {...props} component={Start} path={"/"} 		exact/>
					<PublicLayout {...props} component={Match} path={"/match"} 	exact/>
					{/*<PublicLayout component={404} 		path="*"/>  */}
				</Switch>
			</Fragment>
		</Router>
	);
};

export default Routes;