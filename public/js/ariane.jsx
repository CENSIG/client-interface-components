import React from "react";
import Immutable from "immutable";
import {Ariane} from "../../lib/ariane";

import {dataParentsComponents} from "../../tests/data";
import MyArianeItem from "../../tests/components/MyArianeItem";

export default function run() {
	React.render(
		<Ariane parents={Immutable.fromJS(dataParentsComponents)} withCompose={MyArianeItem} />,
		document.getElementById("arianeCompose")
	);
}
