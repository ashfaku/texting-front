import React from 'react';
import './settingPanel.css';
class RequestPanel extends React.Component
{
	constructor(props)
	{
		super(props);
		this.tryReq = this.tryReq.bind(this);
	}
	tryReq()
	{
		var username = document.getElementById("sendRequest").value;
		this.props.client.on('requestFound', (m) => {
			console.log(m);
		});
		this.props.client.emit('friendRequest', {
			"username" : username,
			clientID: this.props.client.id
		});
	}
	render()
	{
		return (<div id = "requestPanel">
				<input type = "text" id = "sendRequest"></input>
				<button id = "sendReq" onClick = {this.tryReq}>Send Request</button>
		</div>)
	}
}

export default RequestPanel;