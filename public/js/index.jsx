import React from "react";
import Immutable from "immutable";

import {BrothersNavigation} from "../../lib/brothersNavigation";
import MyItemBrothers from "../../tests/components/MyItemBrothers";
import {dataBrothersComponents} from "../../tests/data";

// newStyle for brothers navigation
var newStyle = {
	ul: {
		width: "50%",
		padding:0,
		margin: "auto",
		listStyle: "none"
	},

	liRight: {
		float: "right",
	},

	liLeft: {
		float: "left"	
	}
};

React.render(
	<BrothersNavigation
		brothers={Immutable.List()}
	/>,
	document.getElementById("brothersComponentEmpty")
);

React.render(
	<BrothersNavigation 
		brothers={Immutable.fromJS(dataBrothersComponents)}
		left={1}
		right={3}
	/>,
	document.getElementById("brothersComponent")
);

React.render(
	<BrothersNavigation 
		brothers={Immutable.fromJS(dataBrothersComponents)}
		left={1}
		right={3}
		withCompose={MyItemBrothers}
	/>,
	document.getElementById("brothersComponentCompose")
);

React.render(
	<BrothersNavigation 
		brothers={Immutable.fromJS(dataBrothersComponents)}
		left={1}
		right={3}
		withCompose={MyItemBrothers}
		ulStyle={newStyle.ul}
		liStyleLeft={newStyle.liLeft}
		liStyleRight={newStyle.liRight}
	/>,
	document.getElementById("brothersStyle")
);
