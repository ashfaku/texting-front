import React from 'react';
import './login.css';
import Layout from './layout.jsx';
import logo from './logo1.svg';
import socketClient  from "socket.io-client";
var client;
class Creation extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			"accountStatus" : false
		};
		this.componentDidMount = this.componentDidMount.bind(this);
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
	componentDidMount = () =>
	{
		const url = "http://127.0.0.1:5000/creationRoom";
		//const url = "https://nuclei-message.herokuapp.com";
		client = socketClient(url, {transports: ['websocket', 'polling', 'flashsocket']});
		client.on('status', (message) => {
			console.log(message);
			this.setState({ "accountStatus" : (message.status === "Not allowed")});
			if (message.status === "Allowed")
			{
				client.close();
				this.props.root.render(<Layout user = {message.account} client = {client} />);
			}
		});
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
		console.log(client.id);
		let info = this.getInfo();
		client.emit('createAccount', {
			"username" : info.username,
			"password" : info.password,
			"email" : info.email,
			"clientID": client.id
		});
		/*client.send(JSON.stringify({
			"username" : info.username,
			"password" : info.password,
			"email" : info.email,
			type: "create"
		}));
		//this.props.root.render(<Layout name = {info.username} />);
		*/
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
