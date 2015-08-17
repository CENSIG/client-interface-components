import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import Radium from "radium";
import {arrow} from "../style";

/**
 * Item for breadcrumb
 * @author Jean BOUDET
 */
class ArianeItem extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate = shouldPureComponentUpdate

	/**
	 * Is last item ?
	 * If last return strong element
	 */
	_isLast() {
		let props = this.props;
		return (props.isLast) 
			? <strong>{props.children}</strong>
			: props.children;
	}

	/**
	 * Create item 
	 */
	_createItem() {
		let context = this.context;
		let props = this.props;
		return (
			<span style={context.styleArianeItem} data-cdnom={props.cdnom} onClick={context.arianeCallback}>
				<span>{this._isLast()}</span>
				<span style={arrow}></span>
			</span>
		);
	}

	render() {
		return this._createItem();
	}
}

ArianeItem.defaultProps = {
	isLast: false
};

ArianeItem.contextTypes = {
	arianeCallback: React.PropTypes.func,
	styleArianeItem: React.PropTypes.object
};

ArianeItem = Radium(ArianeItem);

export default ArianeItem;
