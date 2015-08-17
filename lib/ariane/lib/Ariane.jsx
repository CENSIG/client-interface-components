import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import Radium from "radium";
import ArianeItem from "./ArianeItem";
import {base} from "../style";
import composeArianeItem from "./composeArianeItem";

/**
 * Breadcrumb
 * @author Jean BOUDET
 */
class Ariane extends React.Component
{
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate = shouldPureComponentUpdate

	getChildContext() {
		let props = this.props;
		return {
			arianeCallback: props.arianeCallback,
			styleArianeItem: props.styleArianeItem
		}	
	}

	_mapItems(item, index, total) {
		let res;
		let name = item.get("name");
		let cdnom = item.get("cdnom");
		switch (index) {
			case 0:
				res = (
					<ArianeItem key={index} cdnom={cdnom}>
						{name}
					</ArianeItem>
				);
				break;
			case total - 1:
				res = (
					<ArianeItem key={index} cdnom={cdnom} isLast={true}>
						{name}
					</ArianeItem>
				);
				break;
			default:
				res = (
					<ArianeItem key={index} cdnom={cdnom}>	
						{name}
					</ArianeItem>
				);
				break;
		}
		return res;
	}

	_createComposeItems(compose) {
		let Compose = composeArianeItem(compose);
		let n = this.props.parents.size;
		return this.props.parents.map((parent, i) => {
			return (
				<Compose 
					key={i} 
					id={parent.get("cdnom")} 
					position={i}
				>
					{this._mapItems(parent, i, n)}
				</Compose>
			);
		});
	}

	_createDefaultItems() {
		var n = this.props.parents.size;
		return this.props.parents.map((parent, i) => {
			return this._mapItems(parent, i, n);
		});
	}

	render() {
		let {withCompose, ...props} = this.props;
		let items = (withCompose === null) 
			? this._createDefaultItems()
			: this._createComposeItems(withCompose);

		return (
			<div style={props.styleDivBase}>
				{items}	
			</div>
		);	
	}
}

Ariane.propTypes = {
	arianeCallback: React.PropTypes.func,
	styleDivBase: React.PropTypes.object,
	parents: React.PropTypes.object.isRequired,
	styleArianeItem: React.PropTypes.object,
	withCompose: React.PropTypes.func,
};

Ariane.defaultProps = {
	arianeCallback: null,
	styleDivBase: base,
	withCompose: null
};

Ariane.childContextTypes = {
	arianeCallback: React.PropTypes.func,
	styleArianeItem: React.PropTypes.object
};

Ariane = Radium(Ariane);

export default Ariane;
