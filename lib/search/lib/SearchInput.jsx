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
		let props = this.props;
		let spin = (props.displaySpin) ? props.withSpin : null;
		return (
			<div style={this.context.divInput}>
				<input 
					ref="inputSearch"
					style={this.context.input} 
					type="search" 
					placeholder={props.placeholder} 
					onKeyUp={props._onKeyUp} 
					onFocus={props._onFocus}
					onBlur={props._onBlur}
				/>
				{spin}
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
