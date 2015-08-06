import React from "react";

import {ButtonExploreSubTaxonView} from "../../lib/exploreSubTaxon";

const labelButtonMap = {
	FM: "Voir les genres",
	GN: "Voir les espèces",
	ES: "Voir les sous-espèces"
}

class MyExplorerView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let props = this.props;
		let labelButton = labelButtonMap[props.rang];
		return (
			<li>	
				<strong><span>{props.name}</span></strong>
				<ButtonExploreSubTaxonView cdnom={props.cdnom}>	
					{labelButton}	
				</ButtonExploreSubTaxonView>
			</li>
		);	
	}
}

export default MyExplorerView;
