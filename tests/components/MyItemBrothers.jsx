import React from "react";

class MyItemBrothers extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let props = this.props;
		console.log(props.id);
		return (
			<strong>
				{props.children}
			</strong>
		)	
	}
}

export default MyItemBrothers;
