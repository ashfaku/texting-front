import React from 'react';
import './settingPanel.css';
class RequestPanel extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			"request" : ""
		};
		this.tryReq = this.tryReq.bind(this);
	}
	tryReq()
	{
		console.log(this.props.username);
		var username = document.getElementById("sendRequest").value;
		this.props.client.on('requestFound', (m) => {
			this.setState({"request": m});
			if (m === "Found")
			{
				
			}
		});
		this.props.client.emit('friendRequest', {
			username : username,
			own: this.props.username,
			clientID: this.props.client.id
		});
	}
	render()
	{
		return (<div id = "requestPanel">
				<input type = "text" id = "sendRequest"></input>
				<button id = "sendReq" onClick = {this.tryReq}>Send Request</button>
				<div id = "statusResp">{this.state.request}</div>
		</div>)
	}
}

export default RequestPanel;
