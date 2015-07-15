import React from "react";
import Radium from "radium";
import HeaderSearchResult from "./HeaderSearchResult";
import SearchResultItem from "./SearchResultItem";

//import style from "../style";

/**
 * Class for result of research
 * @author Jean BOUDET
 */
class SearchResult extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		var results = this.props.results;
		var notResults = this.props.notResults;
		var res = null;
		if (results.size !== 0) {
			var items = results.map(result => {
				return <SearchResultItem content={result} />;
			});
			res = (
				<ul style={this.context.ulResults}>
					<HeaderSearchResult />
					{items}
				</ul>
			);
		} else if (notResults !== null){
			var error = "Aucun résultat pour la recherche " + this.props.notResults;
			res = <p style={this.context.ulResults}>{error}</p>;
		}
		return res;
	}
}

SearchResult.contextTypes = {
	ulResults: React.PropTypes.object
};

//SearchResult = Radium(SearchResult);

export default SearchResult;
