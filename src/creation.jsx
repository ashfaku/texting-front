import React from 'react';
import './login.css';

import logo from './logo1.svg';
class Creation extends React.Component
{
	getInfo()
	{
		
		var u = document.getElementById('u');
		var p = document.getElementById('p');
		var e = document.getElementById('e');
		var info = 
		{
			"username" : u.value,
			"password" : p.value,
			"email" : e.value
		};
		return info;
	}
	handleSubmit = (event) =>
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
		.then(function(response) {
        console.log(response)
        return response.json();
      });
		event.preventDefault();
	}
	render()
	{
		return <div className = "loginBg">
		        <img src={logo} className = "App-logo" alt = "logo" />
				<div id = "title">Nuclei</div>
				<div id = "login"> 
					<input type = "text" id = "e" placeholder = "Email..."></input>
					<input type = "text" id = "u" placeholder = "Username..."></input>
					<input type = "text" id = "p" placeholder = "Password..."></input>
				</div>
				<button id = "createAccount" onClick = {this.handleSubmit}>Create</button>
			</div>
	}
}

export default Creation;