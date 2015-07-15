import React from "react";
import Radium from "radium";
import ButtonExploreSubTaxon from "./ButtonExploreSubTaxon";
import ExploreSubTaxonView from "./ExploreSubTaxonView";
import style from "../style";

/**
 * Component for display a explore button
 * for display childs of specific taxon
 * @author Jean BOUDET
 */
class ExploreSubTaxon extends React.Component
{
	constructor(props) {
		super(props);	
		this.state = {
			displaying: false,
			isIn: false
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			nextProps.firstChilds !== this.props.firstChilds
			||
			nextProps.parents !== this.props.parents
			||
			nextState.displaying !== this.state.displaying
		);
	}

	getChildContext() {
		return {
			firstChilds: this.props.firstChilds,
			parents: this.props.parents,
			subTaxonViewCallback: this._handleSubTaxonViewClick.bind(this),
			arianeCallback: this._handleArianeCallback.bind(this)
		}	
	}

	componentDidMount() {
		var thisElt = React.findDOMNode(this.refs.explore);
		thisElt.addEventListener("mouseover", this._handleWindowOver.bind(this));	
		thisElt.addEventListener("mouseout", this._handleWindowOut.bind(this));	
		window.addEventListener("mouseup", this._handleWindowClick.bind(this));	
	}

	componentWillUnmount() {
		var thisElt = React.findDOMNode(this.refs.explore);
		thisElt.addEventListener("mouseover", this._handleWindowOver.bind(this));	
		thisElt.addEventListener("mouseout", this._handleWindowOut.bind(this));	
		window.removeEventListener("mouseup", this._handleWindowClick.bind(this));	
	}

	// When "Explorer les fils" is clicked
	_handleSubTaxonViewClick(e) {
		var target = e.target;
		var taxonSupString = target.parentNode.children[0].textContent;
		var cdnom = target.getAttribute("data-cdnom");
		/*this.context.executeAction(ExploreSubTaxonAction.exploreSubTaxon, {
			api: this.context.api,
			event: "sub",
			name: taxonSupString,
			cdnom: cdnom
		});*/
	  this.props.actionClickSub(taxonSupString, cdnom);
	}

	// When an taxon sup is clicked
	_handleArianeCallback(e) {
		var target = e.target;
		var taxonSupString = e.target.textContent;
		var cdnom = target.parentNode.getAttribute("data-cdnom") || target.getAttribute("data-cdnom");
		/*this.context.executeAction(ExploreSubTaxonAction.exploreSubTaxon, {
			api: this.context.api,
			event:"sup",
			name: taxonSupString,
			cdnom: cdnom
		});*/
	  this.props.actionClickSup(taxonSupString, cdnom);
	}

	_handleWindowOver(e) {
		this.setState({
			isIn: true	
		});
	}

	_handleWindowOut(e) {
		this.setState({
			isIn: false	
		});
	}

	_handleWindowClick(e) {
		var thisElt = React.findDOMNode(this.refs.explore);
		
		// click outside box
		if (thisElt !== null && !this.state.isIn) {
			this.setState({
				displaying: false	
			});
		}
	}

	// When button explore is clicked
	_handleClickButton(e) {
		this.setState({
			displaying: true
		});
	}

	render() {
		console.log(this.props.styleButton);
		return (
			<div ref="explore" 
				onMouseDown={this._handleMouseDown}
				onMouseUp={this._handleMouseUp}
			>
				<ButtonExploreSubTaxon 
					style={[this.props.styleButton, this.props.buttonMaterial && style.buttonMaterial]}
					callBackClick={this._handleClickButton.bind(this)}	
				/>
				<ExploreSubTaxonView 
					style={this.props.styleView}
					displaying={this.state.displaying} 
				/>
			</div>
		);
	}
}
ExploreSubTaxon.defaultProps = {
	buttonMaterial : false,
	styleButton    : style.button,
	styleView      : style.taxonView
};

ExploreSubTaxon.childContextTypes = {
	firstChilds: React.PropTypes.object,
	parents: React.PropTypes.object,
	subTaxonViewCallback: React.PropTypes.func,
	arianeCallback: React.PropTypes.func
}

ExploreSubTaxon = Radium(ExploreSubTaxon);

export default ExploreSubTaxon;

