import React from "react";

export default function composeResultItemContent(Component) {
	
	class Compose extends React.Component {
		constructor(props) {
			super(props);	
		}	

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
