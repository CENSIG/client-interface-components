import React from "react";
import Immutable from "immutable";

import {Explorer} from "../../lib/explorer";
import MyExplorerView from "../../tests/components/MyExplorerView";

import {dataExplorerComponents, dataParentsComponents} from "../../tests/data";

export default function run() {
	

	React.render(
		<Explorer 
			firstChilds={Immutable.List()}
			parents={Immutable.fromJS(dataParentsComponents)}
		/>,
		document.getElementById("explorerEmpty")
	);

	React.render(
		<Explorer
			firstChilds={Immutable.fromJS(dataExplorerComponents)}
			parents={Immutable.fromJS(dataParentsComponents)}
		/>,
		document.getElementById("explorerDefault")
	);

	React.render(
		<Explorer
			firstChilds={Immutable.fromJS(dataExplorerComponents)}
			parents={Immutable.fromJS(dataParentsComponents)}
			withCompose={MyExplorerView}
		/>,
		document.getElementById("explorerCompose")
	);

	const actionClickSub = () => {
		console.log("Click sur un taxon inférieurs | Déclenchement d'une action quelconque");
	};

	const actionClickSup = () => {
		console.log("Click sur un taxon suprérieur | Déclenchement d'une action quelconque");
	};

	React.render(
		<Explorer
			firstChilds={Immutable.fromJS(dataExplorerComponents)}
			parents={Immutable.fromJS(dataParentsComponents)}
			withCompose={MyExplorerView}
			actionClickSup={actionClickSup}
			actionClickSub={actionClickSub}
		/>,
		document.getElementById("explorerComposeCallBack")
	);
}
