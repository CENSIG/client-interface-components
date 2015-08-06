import React from "react";
import Immutable from "immutable";

import {ExploreSubTaxon} from "../../lib/exploreSubTaxon";
import MyExplorerView from "../../tests/components/MyExplorerView";

import {dataExplorerComponents, dataParentsComponents} from "../../tests/data";

export default function run() {
	function actionClickSub() {
		console.log("Click sur un taxon inférieurs | Déclenchement d'une action quelconque");
	}

	function actionClickSup() {
		console.log("Click sur un taxon suprérieur | Déclenchement d'une action quelconque");
	}

	React.render(
		<ExploreSubTaxon 
			firstChilds={Immutable.List()}
			parents={Immutable.List()}
		/>,
		document.getElementById("explorerEmpty")
	);

	React.render(
		<ExploreSubTaxon
			firstChilds={Immutable.fromJS(dataExplorerComponents)}
			parents={Immutable.fromJS(dataParentsComponents)}
		/>,
		document.getElementById("explorerDefault")
	);
}
