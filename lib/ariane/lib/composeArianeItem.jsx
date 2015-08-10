import React from "react";

export default function composeArianeItem(Component) {
	class Compose extends React.Component
	{
		constructor(props) {
			super(props);	
		}	

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
