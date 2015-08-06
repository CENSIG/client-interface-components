import React from "react";

/**
 * Button explore sub taxon.
 * @author Jean BOUDET
 */
class ButtonExploreSubTaxonView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	render() {
		let {cdnom, children} = this.props;

		return (
			<span data-cdnom={cdnom} 
				onClick={this.context.subTaxonViewCallback}>{children}</span>);
	}
}

ButtonExploreSubTaxonView.contextTypes = {
	subTaxonViewCallback: React.PropTypes.func
}

export default ButtonExploreSubTaxonView;
