import React from "react";

//import style from "../style";

class HeaderSearchResult extends React.Component
{
	constructor(props) {
		super(props);	
	}

	shouldComponentUpdate(nextProps) {
		return false;	
	}

	render() {
		return (
			<li style={this.context.liResultsItem}>
				<ul style={this.context.ulResultsItemContent}>
					{this.props.header.map(value => {
						return (
							<li style={this.context.liResultsItemContentItem}>
								{value}	
							</li>
						);
					})}
				</ul>
			</li>
		)	
	}
}

HeaderSearchResult.contextTypes = {
	liResultsItem: React.PropTypes.object,
	ulResultsItemContent: React.PropTypes.object,
	liResultsItemContentItem: React.PropTypes.object
};

export default HeaderSearchResult;
