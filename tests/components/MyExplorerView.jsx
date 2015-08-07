import React from "react";
import Radium from "radium";

import {ButtonExplorerView} from "../../lib/explorer";

const labelButtonMap = {
	FM: "Voir les genres",
	GN: "Voir les espèces",
	ES: "Voir les sous-espèces"
};

const myStyle = {
	styleViewLiFirst: {
		color: "#4078c0"
	}
};

class MyExplorerView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let props = this.props;
		let labelButton = labelButtonMap[props.rang];
		return (
			<li style={props.styleViewLi}>	
				<strong style={[props.styleViewLiFirst, myStyle.styleViewLiFirst]}>
					<span>{props.name}</span>
				</strong>
				<ButtonExplorerView cdnom={props.cdnom}>	
					{labelButton}	
				</ButtonExplorerView>
			</li>
		);	
	}
}

export default Radium(MyExplorerView);
