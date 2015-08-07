import React from "react";

class MyArianeItem extends React.Component
{
	constructor(props) {
		super(props);	
	}
	
	render() {
		let props = this.props;
		return (
			<span style={{color: "#4078c0"}}>
				{props.children}
			</span>
		);	
	}
}

export default MyArianeItem;
