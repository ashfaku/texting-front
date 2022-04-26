import React from 'react';
import './send.css';
class Send extends React.Component
{
	constructor(props) 
	{
		super(props);
		this.props = props;
		this.send = this.send.bind(this);
	}
	componentDidMount()
	{
	}
	send = () =>
	{
		var user = this.props.user;
		console.log(document.getElementById("sendMsg").value);
		if (user.friendList.length > 0)
		{
			const docData = 
			{
				message: document.getElementById("sendMsg").value,
				date: new Date(),
				name: user.username,
				other: user.friendList[0],
				color: "red"
			}
			if (docData.message.length > 0)
				this.props.client.emit('sendData', docData);
			document.getElementById("sendMsg").value = "";
		}
	}
	render()
	{
		console.log(this.props.client);
		return <div id = "sendDiv">
			<input type = "text" id = "sendMsg"></input>
			<button id = "send" onClick={this.send}><i className = "fa fa-paper-plane"></i></button>
		</div>
	}

}

export default Send;
