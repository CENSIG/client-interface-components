import React from "react";
import SearchResultItemContent from "./SearchResultItemContent";
import composeResultItemContent from "./composeResultItemContent";

/**
 * Class which represent an result item
 * @author Jean BOUDET
 */
class SearchResultItem extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.content.get("cdnom") !== this.props.content.get("cdnom");
	}

	_renderWithCompose(compose) {
		let Compose = composeResultItemContent(compose);
		let props = this.props;
		let context = this.context;
		return (
			<Compose 
				styleUl={context.ulResultsItemContent}	
				styleLi={context.liResultsItemContentItem}
			>
				{props.content}
			</Compose>
		);
	}

	_renderDefault() {
		return (
			<SearchResultItemContent>
				{this.props.content}
			</SearchResultItemContent>
		);	
	}

	render() {
		let context = this.context;
		let res = context.withCompose === null
			? this._renderDefault()
			: this._renderWithCompose(context.withCompose);
		return (
			<li style={context.liResultsItem}>
				{res}
			</li>
		);
	}
}

SearchResultItem.contextTypes = {
	withCompose              : React.PropTypes.func,
	ulResultsItemContent     : React.PropTypes.object,
	liResultsItemContentItem : React.PropTypes.object,
	liResultsItem            : React.PropTypes.object
}

export default SearchResultItem;
