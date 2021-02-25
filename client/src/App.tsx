import React from 'react';
import './App.css';
import { Release } from './interfaces/release';

const IGNORED_FIELDS = ["resourceUrl", "uri", "dataQuality", "masterUrl"];

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = { release: "", arr: null };
	}

	async callAPI() {
		const text = await (await fetch("http://localhost:8000/getDiscogs")).text();
		let temp  = JSON.parse(text);
		let obj = new Release(temp);
		let arr = this.createMap(obj);
		this.setState( {release: obj, array: arr})
	}

	componentDidMount() {
		this.callAPI();
	}

	createMap(obj: Release) {
		let arr = Object.entries(obj).map(([key, value]) => {
			if (typeof value === 'object' || value === null || IGNORED_FIELDS.includes(key)) {
				return null;
			}
			if (key === 'thumbnail') {
				console.log(value);
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
		return key.replace(/((?<!^)[A-Z](?![A-Z]))(?=\S)/g, ' $1').replace(/^./, s => s.toUpperCase()).replace('Id', 'ID');
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
