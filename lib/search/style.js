export default {
	backDrop: {
		position: "fixed",
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		background: "rgba(0, 0, 0, 0.2)",
		zIndex:1080
	},

	backDropHidden: {
		display: "none"
	},

	divBase: {
		position: "relative",
		zIndex: 1100
	},

	divInput: {
		background: "#fff"
	},

	divInputActive: {
		width: 500,
		boxShadow: "0 2px 5px rgba(0, 0, 0, 0.26)"
	},

	input : {
		border: "none",
		height: 55,
		width: "100%",
		padding:15
	},

	ulResults: {
		background: "#fff",
		margin: "5px 0 0 0",
		padding: 10,
		position: "absolute",
		maxHeight: 400,
		overflowY: "scroll",
		zIndex: 1100
	},

	liResultsItem: {
		margin: "0 0 10px 0",
		padding: "0 0 5px 0",
		borderBottom: "1px solid #e8e8e8"
	},

	ulResultsItemContent: {
		display: "table",
	},

	liResultsItemContentItem: {
		display: "table-cell",
		width: 250
	}
};
