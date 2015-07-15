import React from "react";
import Radium from "radium";

/**
 * Button explore. Display list of taxon childs
 * @author Jean BOUDET
 */
class ButtonExploreSubTaxon extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render () {
		return (
			<span style={this.props.style} onClick={this.props.callBackClick}>Explorer</span>	
		);
	}
}

ButtonExploreSubTaxon = Radium(ButtonExploreSubTaxon);

export default ButtonExploreSubTaxon;
