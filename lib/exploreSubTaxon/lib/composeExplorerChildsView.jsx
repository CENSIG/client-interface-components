import React from "react";

export default function composeExplorerChildsView(Component) {
	class Compose extends React.Component {
		constructor(props) {
			super(props);	
		}	

		render() {
			let props = this.props;

			return (
				<Component name={props.name} cdnom={props.cdnom} /> 
			);	
		}
	}

	return Compose;
};
