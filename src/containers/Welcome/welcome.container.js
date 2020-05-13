import React from "react";
import {Grid} from "@material-ui/core";
import {EntriesList} from "../../components";

let list = [];

class WelcomeContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [...list]
		};
	};

	setList = (l) => {
		list = [...l];
		this.setState({list: list});
	};

	render() {
		return (
			<Grid item container direction={"row"}>
				<Grid item md={12} lg={4}/>
				<Grid item xs={12} lg={4}>
					{/* Botón de subir lista / Botón de cargar template */}
					<EntriesList list={list} setList={this.setList}/>
					{/* Opciones de enfrentamiento */}
					{/* Botón de next */}
				</Grid>
				<Grid item md={12} lg={4}/>
			</Grid>
		);
	}
}

export default WelcomeContainer;