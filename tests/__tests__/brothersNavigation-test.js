var React; 
var TestUtils;
var assert;
var Immutable;
var BrothersNavigation;
var ItemBrothersNavigation;
var composeItemBrothers;
var MyItemBrothers;
var data;

describe("Brothers navigation component", () => {
	before(() => {
		React = require("react/addons");			
		assert = require("assert");
		TestUtils = React.addons.TestUtils; 
		Immutable = require("immutable");
		BrothersNavigation = require("../../lib/brothersNavigation").BrothersNavigation;
		ItemBrothersNavigation = require('../../lib/brothersNavigation/lib/ItemBrothersNavigation');
		MyItemBrothers = require("../components/MyItemBrothers");
		composeItemBrothers = require("../../lib/brothersNavigation/lib/composeItemBrothers");
		data = require("../data").dataBrothersComponents;
	});

	it("should not render brothers", () => {
		let shallowRender = TestUtils.createRenderer();
		assert.throws(() => shallowRender.render(<BrothersNavigation />));
	});

	it("should render message error because brothers is empty", () => {
		let shallowRender = TestUtils.createRenderer();
		shallowRender.render(<BrothersNavigation brothers={Immutable.List()} />);
		let res = shallowRender.getRenderOutput();
		
		assert.equal("p", res.type);
		assert.ok(res.props.children);
	});

	it("should render default brothers component", () => {
		let shallowRender = TestUtils.createRenderer();	
		shallowRender.render(<BrothersNavigation brothers={Immutable.fromJS(data)} left={0} right={2} />);
		let res = shallowRender.getRenderOutput();
		
		let firstChild = res.props.children;
		assert.equal('nav', res.type);
		assert.equal('ul', firstChild.type);

		let i = 0;
		React.Children.forEach(firstChild.props.children, (child) => {
			if (TestUtils.isElementOfType(child, ItemBrothersNavigation)) {
				i++;
			}
		});

		assert.equal(2, i);
	});

	it("should render brothers component with compose", () => {
		let shallowRender = TestUtils.createRenderer();	
		shallowRender.render(<BrothersNavigation 
			brothers={Immutable.fromJS(data)} 
			left={0} 
			right={2} 
			withCompose={MyItemBrothers}
		/>);
		let res = shallowRender.getRenderOutput();

		let firstChild = res.props.children;

		let i = 0;
		React.Children.forEach(firstChild.props.children, (child) => {
			if(!TestUtils.isElementOfType(child, ItemBrothersNavigation)) {
				i++;	
			}
		});

		assert.equal(2, i);
	});
});

