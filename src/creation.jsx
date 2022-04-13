import React from 'react';
import './login.css';

import logo from './logo1.svg';
class Creation extends React.Component
{
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
	    fetch('http://localhost:5000/express_backend', 
		{
			method: 'POST',
			// We convert the React state to JSON and send it as the POST body
			body: JSON.stringify(this.getInfo()),
			headers: 
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		let res = await this.callBackendAPI();
		console.log(res); 
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
				<button id = "createAccount" onClick = {this.handleSubmit}>Create</button>
			</div>
	}
}

export default Creation;