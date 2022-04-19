import React from 'react';
import Message from './message.jsx';
import Setup from './setup.jsx';
import './index.css';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import Send from './send.jsx';

const client = new W3CWebSocket('ws://app.netlify.com/sites/thunderous-bavarois-da9e5c');

class List extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {list : []};
	}
	async componentDidMount() 
	{
		console.log(this.props.username);
		client.onopen = () => {
			console.log('WebSocket Client Connected');
		};
		client.send(JSON.stringify({
			"type" : "texting",
			"name" : "ripple"
		}));
		client.onmessage = (message) =>
		{
			this.setState({list: JSON.parse(message.data)});
			console.log(this.state);
		};
		this.setState({});
	}
    // fetching the GET route from the Express server which matches the GET route from server.js
	callBackendAPI = async () => {
	//	const response = await fetch('http://puppygifs.tumblr.com/api/read/json/');
		const response = await fetch('https://nuclei-texting.herokuapp.com/express_backend/');
		const body = await response.json();
		if (response.status !== 200) 
		{
			throw Error(body.message) 
		}
		return body;
	};

	componentWillUnmount() {}
	render() 
	{
		let i = 0;	
		return ( 
				<div>
				<div className = "list">
					<Setup />{this.state.list.map((e) => <Message info = {e} key = {i++} />)}
				</div>
				<Send client = {client} username = {this.props.username} />
		
			</div>)
	}
}

export default List;