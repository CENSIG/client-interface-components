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
				<Component>
					{props.children}
				</Component>
			);	
		}
	}

	return Compose;
}
