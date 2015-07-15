import React						 from "react";
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import style from "../style";

/**
 * Element for search taxon
 * @author Jean BOUDET
 */
class Search extends React.Component
{
	constructor(props, context) {
		super(props, context);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.results.size === 0) {
			return true;	
		}
		return nextProps.results !== this.props.results;	
	}

	getChildContext() {
		let divInputStyle = (this.props.backDropShow)
			? style.divInputActive
			: this.props.divInput;

		return {
			backDropShow             : this.props.backDropShow,
			divInput                 : divInputStyle,
			input                    : this.props.input,
			ulResults                : this.props.ulResults,
			liResultsItem            : this.props.liResultsItem,
			ulResultsItemContent     : this.props.ulResultsItemContent,
			liResultsItemContentItem : this.props.liResultsItemContentItem
		};	
	}

	_handleKeyUp(e) {
		var q = e.target.value;
		if (q.length > 3) {
			if (this.props.pendingRequest) {
				this.props.actionAbort(this.props.pendingRequest); 
			}
			var cdnom = this.props.parentsCdnom; 
			this.props.actionSearch(q, cdnom);
		}

		if (q.length == 0) {
			this.props.actionReset();
		}
	}

	render() {
		let placeholder = "Recherchez un taxon spécifique dans les "+this.props.label;
		let search = (
			<div style={this.props.backDropShow ? style.divBase : null}>
				<SearchInput 
					placeholder={placeholder} 
					_onKeyUp={this._handleKeyUp.bind(this)} 
					_onFocus={this.props._onFocus}
					_onBlur={this.props._onBlur}
				/>
				<SearchResult 
					results={this.props.results} 
					notResults={this.props.notResults}
				/>
			</div>
		);
		return (this.props.withBackdrop)
			? this._renderWithBackdrop(search)
			: search;
	}

	_renderWithBackdrop(search) {
		return (
			<div>
				<div 
					style={this.props.backDropShow ? style.backDrop : style.backDropHidden}
				></div>
				{search}
			</div>
		)	
	}
}

Search.childContextTypes = {
	backDropShow             : React.PropTypes.bool,
	divInput                 : React.PropTypes.object,
	input                    : React.PropTypes.object,
	ulResults                : React.PropTypes.object,
	liResultsItem            : React.PropTypes.object,
	ulResultsItemContent     : React.PropTypes.object,
	liResultsItemContentItem : React.PropTypes.object
};

Search.defaultProps = {
	withBackdrop             : false,
	divInput                 : style.divInput,
	input                    : style.input,
	ulResults                : style.ulResults,
	liResultsItem            : style.liResultsItem,
	ulResultsItemContent     : style.ulResultsItemContent,
	liResultsItemContentItem : style.liResultsItemContentItem
};

export default Search;
