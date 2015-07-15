import React from "react";
import Radium from "radium";
import style from "../style";

/**
 * Class which represent search input
 * @author Jean BOUDET
 */
class SearchInput extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		return (
			<div style={this.context.divInput}>
				<input 
					ref="inputSearch"
					style={this.context.input} 
					type="search" 
					placeholder={this.props.placeholder} 
					value={this.state.value}
					onKeyUp={this.props._onKeyUp} 
					onFocus={this.props._onFocus}
					onBlur={this.props._onBlur}
				/>
			</div>
		);	
	}
}

SearchInput.contextTypes = {
	divInput     : React.PropTypes.object,
	input        : React.PropTypes.object
}

SearchInput = Radium(SearchInput);

export default SearchInput;
