import React from "react";
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

	shouldComponentUpdate(nextProps) {
		return nextProps.parents !== this.props.parents;	
	}

	getChildContext() {
		return {
			arianeCallback: this.props.arianeCallback	
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
			return <Compose key={i}>{this._mapItems(parent, i, n)}</Compose>;
		});
	}

	_createDefaultItems() {
		var n = this.props.parents.size;
		return this.props.parents.map((parent, i) => {
			return this._mapItems(parent, i, n);
		});
	}

	render() {
		let {withCompose} = this.props;
		let items = (withCompose === null) 
			? this._createDefaultItems()
			: this._createComposeItems(withCompose);

		return (
			<div style={base}>
				{items}	
			</div>
		);	
	}
}

Ariane.propTypes = {
	parents: React.PropTypes.object.isRequired,
	arianeCallback: React.PropTypes.func,
	withCompose: React.PropTypes.func,
	style: React.PropTypes.object
};

Ariane.defaultProps = {
	arianeCallback: null,
	style: base,
	withCompose: null
};

Ariane.childContextTypes = {
	arianeCallback: React.PropTypes.func
};

Ariane = Radium(Ariane);

export default Ariane;
