import React from "react";

import shouldPureComponentUpdate from "react-pure-render/function";

export default function composeResultItemContent(Component) {
	
	class Compose extends React.Component {
		constructor(props) {
			super(props);	
		}	

		shouldComponentUpdate = shouldPureComponentUpdate

		render() {
			let props = this.props;
			return (
				<Component
					styleUl={props.styleUl}
					styleLi={props.styleLi}
				>
					{props.children}						
				</Component>
			);
		}
	}

	return Compose;
}
