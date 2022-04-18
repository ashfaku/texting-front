import React from 'react';
import './login.css';
import Layout from './layout.jsx';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import logo from './logo1.svg';

const client = new W3CWebSocket('ws://localhost:5000');
class Creation extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			"accountStatus" : false
		};
	}
	getInfo()
	{		
		var u = document.getElementById('uN');
		var p = document.getElementById('pN');
		var e = document.getElementById('e');
		var info = 
		{
			"username" : u.value,
			"password" : p.value,
			"email" : e.value
		};
		return info;
	}
	componentDidMount()
	{
		client.onopen = () => {
	//		console.log('WebSocket Client Connected');
		};
		client.onmessage = (message) => {
			var v = JSON.parse(message.data);
		//	console.log(v.account);
			this.setState({ "accountStatus" : (v.status === "Not allowed")});
		//	console.log(this.state);
			if (this.state.accountStatus)
			{
				client.close();
				this.props.root.render(<Layout user = {v.account} />);
			}
		};
	}
	callBackendAPI = async () => 
	{
		const response = await fetch('http://localhost:5000/express_backend');
		const body = await response.json();
		if (response.status !== 200) 
		{
			throw Error(body.message) 
		}
		return body;
	};
	handleSubmit = async (event) =>
	{
		let info = this.getInfo();
		client.send(JSON.stringify({
			"username" : info.username,
			"password" : info.password,
			"email" : info.email,
			type: "create"
		}));
		//this.props.root.render(<Layout name = {info.username} />);
		event.preventDefault();
	}
	render()
	{
		return <div className = "loginBg">
		        <img src={logo} className = "App-logo" alt = "logo" />
				<div id = "title">Nuclei</div>
				<div id = "login"> 
					<input type = "text" id = "e" placeholder = "Email..."></input>
					<input type = "text" id = "uN" placeholder = "Username..."></input>
					<input type = "text" id = "pN" placeholder = "Password..."></input>
				</div>
				{this.state.accountStatus ? <div id = "accountStatus">Username is already taken</div> : <div></div>}

				<button id = "createAccount" onClick = {this.handleSubmit}>Create</button>
			</div>
	}
}

export default Creation;
