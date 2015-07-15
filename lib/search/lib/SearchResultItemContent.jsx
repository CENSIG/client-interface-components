import React from "react";
import ItemContentName from "./ItemContentName";

//import style from "../style";

/**
 * Class which represent content of an item result
 * @author Jean BOUDET
 */
class SearchResultItemContent extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		var data = this.props.children;
		return (
			<ul style={this.context.ulResultsItemContent}>
				<li style={this.context.liResultsItemContentItem}>
					<em><strong>{data.get("nameRef")}</strong></em>
				</li>
				<ItemContentName isref={data.get("isref")}>
					{data.get("name")}
				</ItemContentName>
			</ul>
		);	
	}
}

SearchResultItemContent.contextTypes = {
	ulResultsItemContent: React.PropTypes.object,
	liResultsItemContentItem: React.PropTypes.object
};

export default SearchResultItemContent;
