import React from 'react';
import Message from './message.jsx';
import Setup from './setup.jsx';
import './index.css';
import Send from './send.jsx';
import socketClient  from "socket.io-client";
var client;
class List extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {list : []};
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	componentDidMount = async () =>
	{
		client = this.props.client;
		client.on('textDocs', (message) => {
			console.log(message);
	//		this.setState({list: message});
		});
		client.on('update', (message) => {
			console.log(message);
			document.getElementById("mgL").scrollTop = document.getElementById("mgL").scrollHeight;
			this.setState({list: message});
		});
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
				<div className = "list" id = "mgL">
					<Setup />{this.state.list.map((e) => <Message info = {e} key = {i++} />)}
				</div>
				<Send client = {this.props.client} user = {this.props.user} />
		
			</div>)
	}
}

export default List;