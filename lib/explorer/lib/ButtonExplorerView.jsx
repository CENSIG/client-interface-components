import React from "react";

/**
 * Button explore sub taxon.
 * @author Jean BOUDET
 */
class ButtonExplorerView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let {cdnom, children} = this.props;

		return (
			<span 
				style={this.context.styleButtonExplorerView}
				data-cdnom={cdnom} 
				onClick={this.context.subTaxonViewCallback}
			>
				{children}
			</span>);
	}
}

ButtonExplorerView.contextTypes = {
	subTaxonViewCallback: React.PropTypes.func,
	styleButtonExplorerView: React.PropTypes.object
}

export default ButtonExplorerView;
