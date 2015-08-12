import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import Radium from "radium";

/**
 * Button explore. Display list of taxon childs
 * @author Jean BOUDET
 */
class ButtonExplorer extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate = shouldPureComponentUpdate

	render () {
		let props = this.props;
		return (
			<span style={props.styleButton} onClick={props.callBackClick}>
				<span style={props.styleInnerButton}>Explorer</span>	
			</span>
		);
	}
}

ButtonExplorer = Radium(ButtonExplorer);

export default ButtonExplorer;
