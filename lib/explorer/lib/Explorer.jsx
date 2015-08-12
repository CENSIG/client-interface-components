import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";
import Radium from "radium";
import ButtonExplorer from "./ButtonExplorer";
import ExplorerView from "./ExplorerView";
import style from "../style";

/**
 * Component for display a explore button
 * for display childs of specific taxon
 * @author Jean BOUDET
 */
class Explorer extends React.Component
{
	constructor(props) {
		super(props);	
		this.state = {
			displaying: false,
			isIn: false
		}
	}

	shouldComponentUpdate = shouldPureComponentUpdate

	getChildContext() {
		return {
			subTaxonViewCallback: (this.props.actionClickSub) ? this._handleSubTaxonViewClick.bind(this) : null,
			arianeCallback: (this.props.actionClickSup) ? this._handleArianeCallback.bind(this) : null,
			styleButtonExplorerView: this.props.styleButtonExplorerView
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
	  this.props.actionClickSub(taxonSupString, cdnom);
	}

	// When an taxon sup is clicked
	_handleArianeCallback(e) {
		var target = e.target;
		var taxonSupString = e.target.textContent;
		var cdnom = target.parentNode.getAttribute("data-cdnom") || target.getAttribute("data-cdnom");
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
		let props = this.props;
		return (
			<div ref="explore" 
				onMouseDown={this._handleMouseDown}
				onMouseUp={this._handleMouseUp}
			>
				<ButtonExplorer 
					styleButton={[props.styleButton, props.buttonMaterial && style.buttonMaterial]}
					styleInnerButton={[props.buttonMaterial && style.innerButtonMaterial, this.state.displaying && style.innerButtonTransform]}
					callBackClick={this._handleClickButton.bind(this)}	
				/>
				<ExplorerView 
					styleView={props.styleView}
					styleViewUl={props.styleViewUl}
					styleViewLi={props.styleViewLi}
					styleViewLiFirst={props.styleViewLiFirst}
					displaying={this.state.displaying} 
					firstChilds={props.firstChilds}
					parents={props.parents}
					withCompose={props.withCompose}
					withSpin={props.withSpin}
					displaySpin={props.displaySpin}
				/>
			</div>
		);
	}
}

Explorer.propTypes = {
	firstChilds: React.PropTypes.object.isRequired,
	parents: React.PropTypes.object.isRequired,
	actionClickSup: React.PropTypes.func,
	actionClickSub: React.PropTypes.func,
	withCompose: React.PropTypes.func,
	withSpin: React.PropTypes.object,
	displaySpin: React.PropTypes.bool
},

Explorer.defaultProps = {
	withCompose             : null,
	withSpin                : null,
	displaySpin             : false,
	buttonMaterial          : false,
	styleButton             : style.button,
	styleView               : style.taxonView,
	styleViewUl             : style.taxonViewUl,
	styleViewLi             : style.taxonViewLi,
	styleButtonExplorerView : style.buttonExplorerView,
	styleViewLiFirst        : style.taxonViewLiFirstChild
};

Explorer.childContextTypes = {
	subTaxonViewCallback: React.PropTypes.func,
	arianeCallback: React.PropTypes.func,
	styleButtonExplorerView: React.PropTypes.object
};

Explorer = Radium(Explorer);

export default Explorer;

