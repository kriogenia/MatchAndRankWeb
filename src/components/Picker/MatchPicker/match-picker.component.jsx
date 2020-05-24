import React from "react";
import {MatchButton} from "../../index";

const MatchPicker = ({match, finished, vote}) => {

	return (
		<div>
			<MatchButton color={"primary"} finished={finished} onClick={() => vote("a")}>
				{match.a.name}
			</MatchButton>
			<MatchButton color={"secondary"} finished={finished} onClick={() => vote("b")}>
				{match.b.name}
			</MatchButton>
		</div>
	);

};

export default MatchPicker;