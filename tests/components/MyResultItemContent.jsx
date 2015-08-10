import React from "react";
import Radium from "radium";

import {ItemContentName} from "../../lib/search";

const otherStyle = {
	color: "#4078c0"
}

class MyResultItemContent extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let {children, styleUl, styleLi} = this.props;
		return (
			<ul style={[styleUl, otherStyle]}>
				<li style={styleLi}>
					<em><strong>{children.get("nameRef")}</strong></em>
				</li>
				<ItemContentName isref={children.get("isref")}>
					{children.get("name")}
				</ItemContentName>
			</ul>
		);	
	}
}

export default Radium(MyResultItemContent);
