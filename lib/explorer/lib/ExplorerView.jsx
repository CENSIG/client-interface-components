import React from "react";
import Radium from "radium";
import {Ariane} from "../../ariane";
import ButtonExplorerView from "./ButtonExplorerView";
import composeExplorerChildsView from "./composeExplorerChildsView";

import style from "../style";

/**
 * List childs of specific taxon
 * @author Jean BOUDET
 */
class ExplorerView extends React.Component
{
	constructor(props) {
		super(props);	
	}

	_getDefaultFirstChilds() {
		let props = this.props;
		return props.firstChilds.map((child, i) => {
			return (
				<li key={i} style={props.styleViewLi}>
					<span style={props.styleViewLiFirst}>{child.get("name")}</span>
					<ButtonExplorerView cdnom={child.get("cdnom")}>
						Voir les taxons inférieurs
					</ButtonExplorerView>
				</li>
			);
		});
	}

	_getComposeFirstChilds(compose) {
		let props = this.props;
		let Compose = composeExplorerChildsView(compose);
		return props.firstChilds.map((child, i) => {
			return (
				<Compose key={i} 
					name={child.get("name")} 
					cdnom={child.get("cdnom")}
					rang={child.get("rang")}
					styleViewLi={props.styleViewLi}
					styleViewLiFirst={props.styleViewLiFirst}
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
			? <ul style={this.props.styleViewUl}>{childs}</ul> 
			: <p>Il n'y a pas de fils observés</p>;
	}

	render () {
		let props = this.props;
		let styleView = props.styleView;
		let res = this._getFirstChilds(props.withCompose);

		if (!props.displaying) {
			styleView = style.taxonViewHidden;
		} else {
			if (props.displaySpin) {
				res = props.withSpin;	
			}	
		}

		return (
			<div style={styleView}>
				<Ariane	parents={props.parents} arianeCallback={this.context.arianeCallback}/>
				{res}
			</div>	
		)
	}
}

ExplorerView.contextTypes = {
	arianeCallback: React.PropTypes.func
}

ExplorerView = Radium(ExplorerView);

export default ExplorerView;
