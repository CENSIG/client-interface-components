import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";

export default function composeArianeItem(Component) {
	class Compose extends React.Component
	{
		constructor(props) {
			super(props);	
		}	

		shouldComponentUpdate = shouldPureComponentUpdate

		render() {
			let props = this.props;
			return (
				<Component 
					position={props.position}
					id={props.id}
				>
					{props.children}
				</Component>
			);	
		}
	}

	return Compose;
}
