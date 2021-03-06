import React from "react";

//import style from "../style";

/**
 * Class which represent name of taxon
 * @author Jean BOUDET
 */
class ItemContentName extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		var name = this.props.children;

		if (this.props.isref) {
			name = <strong>{name}</strong>
		}
		return (
			<li style={this.context.liResultsItemContentItem}>
				{name}
			</li>
		)	
	}
}

ItemContentName.contextTypes = {
	liResultsItemContentItem: React.PropTypes.object
};

export default ItemContentName;
