import React from 'react';
import './App.css';
import { Release } from '../../api/interfaces/release';

const IGNORED_FIELDS = ["resource_url", "uri", "data_quality", "master_url"];

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { release: "", arr: null };
	}

	async callAPI() {
		const text = await (await fetch("http://localhost:8000/getDiscogs")).text();
		let temp  = JSON.parse(text);
		let obj = new Release(temp);
		console.log(obj);
		let arr = this.createMap(obj);
		this.setState( {release: obj, array: arr})
	}

	componentDidMount() {
		//this.callAPI();
		this.callAPI();
	}

	createMap(obj: Release) {
		let arr = Object.entries(obj).map(([key, value]) => {
			if (typeof value === 'object' || value === null || IGNORED_FIELDS.includes(key)) {
				return null;
			}
			if (key === 'thumb') {
				return (
					<img src={value} alt="img" />
				)
			}
			return (
				<p>{this.formatKey(key)}: {value}</p>
			)
		});
		return arr;
	}

	formatKey(key: string) {
		let formatted = key.split('_');
		formatted.forEach((element, index, self) => {
			self[index] = self[index][0].toLocaleUpperCase() + self[index].substr(1);

			if (element === 'id') {
				self[index] = 'ID';
			}
		});

		return formatted.join(' ');
	}

	render() {
		return (
			<div className="App">
				<ul>
					{this.state.array}
				</ul>
			</div>
		);
	}
}

export default App;
