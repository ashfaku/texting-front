import React from 'react';
import './login.css';
import logo from './logo1.svg';
import Creation from './creation.jsx';
import socketClient  from "socket.io-client";

var client;
class Login extends React.Component
{
	login()
	{
		var u = document.getElementById('u');
		var p = document.getElementById('p');
		var info = 
		{
			"username" : u.value,
			"password" : p.value
		};
		return info;
	}
	componentDidMount()
	{
		const url = "http://127.0.0.1:5000";
	    //const url = "https://nuclei-message.herokuapp.com";
		client = socketClient(url, {transports: ['websocket', 'polling', 'flashsocket']});
	}
	handleSubmit = (event) => 
	{
		client.emit('creating', client.id);
		this.props.value.render(<Creation client = {client} root = {this.props.value} />);
	}
	render()
	{
		return <div className = "loginBg">
		        <img src={logo} className = "App-logo" alt = "logo" />
				<div id = "title">Nuclei</div>
				<div id = "login"> 
					<input type = "text" id = "u" placeholder = "Username..."></input>
					<input type = "text" id = "p" placeholder = "Password..."></input>
				</div>
				<button id = "loginButton" onClick = {this.login}>Login</button>
				<div id = "line">or</div>
				<button id = "createAccount"onClick = {this.handleSubmit}>Create New Account</button>
			</div>
	}
}

export default Login;
