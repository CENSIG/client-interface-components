import React from "react";

class MyItemBrothers extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let props = this.props;
		return (
			<strong>
				{props.children}
			</strong>
		)	
	}
}

export default MyItemBrothers;
