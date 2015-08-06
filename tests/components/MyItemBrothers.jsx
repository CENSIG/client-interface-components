import React from "react";

class MyItemBrothers extends React.Component
{
	constructor(props) {
		super(props);	
	}

	_items(props) {
		let after = props.right 
			? <span style={props.ArrowStyle}></span>
			: <strong><span>{props.children}</span></strong>;

		let before = props.right
			? <strong><span>{props.children}</span></strong>
			: <span style={props.ArrowStyle}></span>;

		return (
			<div>
				{before}
				{after}
			</div>
		);	
	}

	render() {
		let props = this.props;
		return (
			<li	style={props.liStyle}>
				{this._items(props)}
			</li>
		)	
	}
}

export default MyItemBrothers;
