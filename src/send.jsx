import React from 'react';
import './send.css';
class Send extends React.Component
{
	async send()
	{
		const docData = 
		{
			type: "sendData",
			stringExample: document.getElementById("sendMsg").value,
		}
		this.props.client.send(JSON.stringify(docData));
	}
	render()
	{
		return <div id = "sendDiv">
			<input type = "text" id = "sendMsg"></input>
			<button id = "send" onClick={this.send}><i className = "fa fa-paper-plane"></i></button>
		</div>
	}

}

export default Send;
