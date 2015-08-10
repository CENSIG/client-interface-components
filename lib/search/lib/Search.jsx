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
		let props = this.props;

		let divInputStyle = (props.backDropShow)
			? style.divInputActive
			: props.divInput;

		return {
			withCompose              : props.withCompose,
			backDropShow             : props.backDropShow,
			divInput                 : divInputStyle,
			input                    : props.input,
			ulResults                : props.ulResults,
			liResultsItem            : props.liResultsItem,
			ulResultsItemContent     : props.ulResultsItemContent,
			liResultsItemContentItem : props.liResultsItemContentItem
		};	
	}

	_handleKeyUp(e) {
		let props = this.props;
		let q = e.target.value;
		if (q.length > 3) {
			if (props.pendingRequest) {
				props.actionAbort(props.pendingRequest); 
			}
			props.actionSearch(q);
		}

		if (q.length == 0) {
			props.actionReset();
		}
	}

	render() {
		let props = this.props;

		let placeholder = "Recherchez un taxon"
		let search = (
			<div style={props.backDropShow ? style.divBase : null}>
				<SearchInput 
					placeholder={placeholder} 
					_onKeyUp={this._handleKeyUp.bind(this)} 
					_onFocus={props._onFocus}
					_onBlur={props._onBlur}
				/>
				<SearchResult 
					header={props.header}
					results={props.results} 
					notResults={props.notResults}
				/>
			</div>
		);
		return (props.withBackdrop)
			? this._renderWithBackdrop(search)
			: search;
	}

	_renderWithBackdrop(search) {
		let props = this.props;
		return (
			<div>
				<div 
					style={props.backDropShow ? style.backDrop : style.backDropHidden}
				></div>
				{search}
			</div>
		)	
	}
}

Search.propTypes = {
	results                  : React.PropTypes.object.isRequired,
	notResults               : React.PropTypes.string.isRequired,
	header                   : React.PropTypes.array.isRequired,
	actionSearch             : React.PropTypes.func.isRequired,
	actionReset              : React.PropTypes.func.isRequired,
	actionAbort              : React.PropTypes.func,
	_onFocus                 : React.PropTypes.func,
	_onBlur                  : React.PropTypes.func,
	withBackdrop             : React.PropTypes.bool,
	withCompose              : React.PropTypes.func,
	backDropShow             : React.PropTypes.bool,
	divInput                 : React.PropTypes.object,
	input                    : React.PropTypes.object,
	ulResults                : React.PropTypes.object,
	liResultsItem            : React.PropTypes.object,
	ulResultsItemContent     : React.PropTypes.object,
	liResultsItemContentItem : React.PropTypes.object
};

Search.childContextTypes = {
	withCompose              : React.PropTypes.func,
	backDropShow             : React.PropTypes.bool,
	divInput                 : React.PropTypes.object,
	input                    : React.PropTypes.object,
	ulResults                : React.PropTypes.object,
	liResultsItem            : React.PropTypes.object,
	ulResultsItemContent     : React.PropTypes.object,
	liResultsItemContentItem : React.PropTypes.object
};

Search.defaultProps = {
	withCompose              : null,
	withBackdrop             : false,
	divInput                 : style.divInput,
	input                    : style.input,
	ulResults                : style.ulResults,
	liResultsItem            : style.liResultsItem,
	ulResultsItemContent     : style.ulResultsItemContent,
	liResultsItemContentItem : style.liResultsItemContentItem
};

export default Search;
