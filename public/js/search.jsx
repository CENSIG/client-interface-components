import React from "react";
import Immutable from "immutable";

import {Search} from "../../lib/search";

import MyResultItemContent from "../../tests/components/MyResultItemContent";

var results = Immutable.List(); 
var data = [
	{ cdnom: 2016, name: "Maculinea", cdref: 2016, nameRef: "Maculinea", isref:true },
	{ cdnom: 2017, name: "Maculinea alcon", cdref: 2017, nameRef: "Maculinea alcon", isref:true },
	{ cdnom: 2018, name: "Maculinea alcon alcon", cdref: 2018, nameRef: "Maculinea alcon alcon", isref: true},
	{ cdnom: 2019, name: "Maculinea faucon", cdref: 2017, nameRef: "Maculinea alcon", isref: false}
];

var notResults = null;

export default function run() {

	class FakeSpin extends React.Component
	{
		constructor(props) {
			super(props);	
		}	

		render() {
			return (
				<div style={{position: "relative", float:"right", bottom: 39}}>
					<p>le spin est là !!!</p>
				</div>
			);	
		}
	}

	class BasicSearch extends React.Component
	{
		constructor(props) {
			super(props);	
			this.state = {
				results: results,
				notResults: notResults,
				displaySpin: false
			};
		}	

		actionSearch(q) {
			let r = data.filter(value => {
				return value.name.indexOf(q) > -1;
			});

			if (r.length === 0) {
				this.setState({ notResults: q });
			}

			this.setState({ 
				results: Immutable.fromJS(r),
				displaySpin: false
			});
		}

		actionReset() {
			this.setState({
				results: Immutable.List(),
				notResults: null
			});	
		}

		render() {
			return (
				<Search 
					label="papillons"
					actionSearch={this.actionSearch.bind(this)}
					actionReset={this.actionReset.bind(this)}
					results={this.state.results}
					notResults={this.state.notResults}
					header={[
						"Taxon référent",
						"Nom"
					]}
					withCompose={this.props.withCompose}
				/>
			);	
		}
	}

	React.render(
		<BasicSearch />,
		document.getElementById("searchDefault")
	);	

	React.render(
		<BasicSearch withCompose={MyResultItemContent} />,
		document.getElementById("searchCompose")
	);
}
