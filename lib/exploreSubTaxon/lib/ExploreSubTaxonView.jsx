import React from "react";
import Radium from "radium";
import {Ariane} from "../../ariane";
import ButtonExploreSubTaxonView from "./ButtonExploreSubTaxonView";
import composeExplorerChildsView from "./composeExplorerChildsView";

import style from "../style";

/**
 * List childs of specific taxon
 * @author Jean BOUDET
 */
class ExploreSubTaxonView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	_getDefaultFirstChilds() {
		return this.props.firstChilds.map((child, i) => {
			return (
				<li key={i}>
					<span>{child.get("name")}</span>
					<ButtonExploreSubTaxonView cdnom={child.get("cdnom")}>
						Voir les taxons inférieurs
					</ButtonExploreSubTaxonView>
				</li>
			);
		});
	}

	_getComposeFirstChilds(compose) {
		let Compose = composeExplorerChildsView(compose);
		return this.props.firstChilds.map((child, i) => {
			return (
				<Compose key={i} 
					name={child.get("name")} 
					cdnom={child.get("cdnom")}
					rang={child.get("rang")}
				/>
			);	
		});		
	}

	_getFirstChilds(compose) {
		let childs;	

		if (compose === null) {
			childs = this._getDefaultFirstChilds();		
		} else {
			childs = this._getComposeFirstChilds(compose);	
		}

		return childs.size !== 0 
			? <ul style={style.taxonViewUl}>{childs}</ul> 
			: <p>Il n'y a pas de fils observés</p>;
	}

	render () {
		let props = this.props;
		let styleTaxonView = props.style;

		if (!props.displaying) {
			styleTaxonView = style.taxonViewHidden;
		} 

		return (
			<div style={styleTaxonView}>
				<Ariane	parents={props.parents} arianeCallback={this.context.arianeCallback}/>
				{this._getFirstChilds(props.withCompose)}
			</div>	
		)
	}
}

ExploreSubTaxonView.contextTypes = {
	atlasUriName: React.PropTypes.string
}

ExploreSubTaxonView = Radium(ExploreSubTaxonView);

export default ExploreSubTaxonView;
