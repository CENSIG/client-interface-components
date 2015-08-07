var React;
var TestUtils;
var assert;
var Immutable;
var Explorer;
var ExplorerView;
var dataParents;
var dataExplorer;

describe("Explorer taxon", () => {
	before(() => {
		React = require("react/addons");			
		assert = require("assert");
		TestUtils = React.addons.TestUtils; 
		Immutable = require("immutable");
		Explorer = require("../../lib/explorer").Explorer;
		ExplorerView = require("../../lib/explorer/lib/ExplorerView").ExplorerView;
		dataParents = require("../data").dataParentsComponents;
		dataExplorer = require("../data").dataExplorerComponents;
	});

	it("Should not render explorer", () => {
		let shallowRender = TestUtils.createRenderer();
		shallowRender.render(<Explorer />);
		let res = shallowRender.getRenderOutput();
		
		assert(typeof res.props.firstChild == 'undefined');
		assert(typeof res.props.firstChild == 'undefined');
	});

	it("Should render a message in view because firstChild is empty", () => {
		let shallowRender = TestUtils.createRenderer();
		shallowRender.render(<Explorer
			parents={Immutable.fromJS(dataParents)}
			firstChild={Immutable.List()}
		/>);

		let res = shallowRender.getRenderOutput();
		let children = res.props.children;
		let nb = React.Children.count(children);
		assert.equal(2, nb);
	});
});
