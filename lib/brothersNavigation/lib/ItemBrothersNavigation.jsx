import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";

/**
 * A component which represent item of brothers
 * navigation
 * @author Jean BOUDET
 */
class ItemBrothersNavigation extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate = shouldPureComponentUpdate

	_item(props) {
		let after = props.right 
			? <span style={props.ArrowStyle}></span>
			: <span>{props.children}</span>;

		let before = props.right
			? <span>{props.children}</span>
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
			<li style={props.liStyle}>
				{this._item(props)}
			</li>
		)	
	}
}

export default ItemBrothersNavigation;
