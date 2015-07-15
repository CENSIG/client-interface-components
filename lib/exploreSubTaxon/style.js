var buttonColor = "rgb(33, 150, 243)";
var shadow      = "0px 2px 5px rgba(0, 0, 0, 0.26)";

export default {
	"button": {
		"cursor": "pointer"
	},

	"buttonMaterial": {
		"background":buttonColor, 
		"border": "1px solid " + buttonColor, 
		"borderRadius": 40,
		"boxShadow": shadow, 
		"display":"block",
		"margin": "0 0 0 auto",
		"height": 50,
		"textIndent": -9000,
		"width": 50
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

	"taxonViewHidden": {
		display: "none"
	}
};
