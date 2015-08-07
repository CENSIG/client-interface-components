import React from "react";
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

	/*shouldComponentUpdate(nextProps) {
		return nextProps.children !== this.props.children;	
	}*/

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
		let props = this.props;
		return (
			<span data-cdnom={props.cdnom} onClick={this.context.arianeCallback}>
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
	arianeCallback: React.PropTypes.func
};

ArianeItem = Radium(ArianeItem);

export default ArianeItem;
