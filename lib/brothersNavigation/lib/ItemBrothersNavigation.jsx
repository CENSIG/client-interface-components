import React from "react";

import style from "../style";

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

	shouldComponentUpdate(nextProps) {
		return nextProps.children !== this.props.children;	
	}

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
		return (
			<li style={style.liStyle}>
				{this._item(this.props)}
			</li>
		)	
	}
}

export default ItemBrothersNavigation;
