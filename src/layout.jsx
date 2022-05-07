import List from './list.jsx';
import Panel from './panel.jsx';
import FriendList from './friendList.jsx';
import React from 'react';
import socketClient from "socket.io-client";
var client;
class Layout extends React.Component
{
	
	constructor(props)
	{
		super(props);
		this.state = {
			client: null
		};
		
	}
	componentDidMount = () =>	
	{
		console.log("Here?");
		const url = "http://127.0.0.1:5000/chatting";
		//const url = "https://nuclei-message.herokuapp.com";
		client = socketClient(url, {transports: ['websocket', 'polling', 'flashsocket']});
		this.setState({client: client});
		client.on('connect', () => {
			client.emit('dataReq', {
				clientID : client.id,
				own: this.props.user.username,
			});
		});	
	}
	render()
	{
		console.log(client);
		return <div>
			{this.state.client === null ? <div>Loading...</div> : <div>
				<FriendList client = {this.state.client} list = {this.props.user.friendList} />
				<List client = {this.state.client} user = {this.props.user} />
				<Panel client = {this.state.client} username = {this.props.user.username} />
			</div>}
		</div>
	}
}

export default Layout;		
			//	<FriendList client = {client} list = {this.props.user.friendList} />
				//<List client = {client} user = {this.props.user} />
				//<Panel client = {client} username = {this.props.user.username} />
	