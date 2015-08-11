import React from "react";
import Radium from "radium";
import ItemBrothersNavigation from "./ItemBrothersNavigation";

import composeItemBrothers from "./composeItemBrothers";
import style from "../style";

/**
 * A component which represent brothers navigation
 * @author Jean BOUDET
 */
class BrothersNavigation extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.brothers !== this.props.brothers;	
	}

	_buildItem(item, key) {
		return <ItemBrothersNavigation key={key} {...item} />;
	}

	_renderWithCompose(items) {
		let Compose = composeItemBrothers(this.props.withCompose);
		return items.map((item, idx) => {
			return (
				<Compose key={idx}>
					{this._buildItem(item)}
				</Compose>
			);
		});
	}

	_renderDefault(items) {
		return items.map((item, idx) => {
			return this._buildItem(item, idx); 
		});
	}

	render() {
		let leftBrother, rightBrother;
		let {brothers, withCompose, ...props} = this.props;

		if (brothers.size !== 0) {
			leftBrother   = brothers.get(props.left);
			rightBrother  = brothers.get(props.right);

			let items = [
				{
					right: false, 
					ArrowStyle: props.leftStyle, 
					liStyle: props.liStyleLeft,	
					cdnom: leftBrother.get("cdnom"), 
					children: leftBrother.get("name")
				},
				{
					right: true, 
					ArrowStyle: props.rightStyle, 
					liStyle: props.liStyleRight,
					cdnom: rightBrother.get("cdnom"), 
					children: rightBrother.get("name")
				}
			]

			let render = (withCompose === null)
				? this._renderDefault(items)
				: this._renderWithCompose(items);

			return (
				<nav style={props.navStyle}>
					<ul style={props.ulStyle}>
						{render}
					</ul>
				</nav>
			);
		}

		return <p>Aucun frère observé n'a été trouvé</p>
	}
}

BrothersNavigation.propTypes = {
	brothers: React.PropTypes.object.isRequired
}

BrothersNavigation.defaultProps = {
	navStyle: {},
	ulStyle: style.ul,
	liStyleLeft: style.li,
	liStyleRight: style.li,
	leftStyle: style.left,
	rightStyle: style.right,
	withCompose: null
};

BrothersNavigation = Radium(BrothersNavigation);

export default BrothersNavigation;
