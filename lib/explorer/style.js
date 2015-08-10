var buttonColor = "rgb(33, 150, 243)";
var shadow      = "0px 2px 5px rgba(0, 0, 0, 0.26)";
var borderInnerButtonMaterial = "2px solid #fff";

export default {
	"button": {
		"cursor": "pointer"
	},

	"buttonMaterial": {
		background:buttonColor, 
		border: "1px solid " + buttonColor, 
		borderRadius: 40,
		boxShadow: shadow, 
		display:"block",
		height: 50,
		width: 50
	},

	"innerButtonMaterial": {
		display: "inline-block",
		borderTop: borderInnerButtonMaterial, 
		borderRight: borderInnerButtonMaterial,
		width: 15,
		height: 15,
		textIndent: -9000,
		margin: "15px 0 0 12px",
		transition: "all 0.3s",
		transform: "rotate(45deg)",
		overflow: "hidden"
	},

	"innerButtonTransform": {
		transform:"rotate(135deg)",
		margin: "14px 0 0 16px"
	},

	"buttonExplorerView": {
		cursor: "pointer"	
	},

	"taxonView": {
		color: "#000",
		background: "#fff",
		padding: 10,
		boxShadow: shadow, 
		borderRadius: 3,
		position: "relative",
		right: 10,
		margin: "10px 0 0 0"
	},

	"taxonViewUl": {
		maxHeight: 500,
		overflowY: "scroll"
	},

	"taxonViewLi": {
		display:"table",
		padding: 5
	},

	"taxonViewLiFirstChild": {
		display: "table-cell",
		width: 250
	},

	"taxonViewHidden": {
		display: "none"
	}
};
