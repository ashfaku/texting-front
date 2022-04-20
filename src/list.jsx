import React from 'react';
import Message from './message.jsx';
import Setup from './setup.jsx';
import './index.css';
import Send from './send.jsx';

class List extends React.Component 
{
	constructor(props) 
	{
		super(props);
		this.state = {list : []};
		this.componentDidMount = this.componentDidMount.bind(this);

	}
	componentDidMount = async () =>
	{
		let client = this.props.client;
		client.emit('initialList', {"clientID" : client.id });
		console.log(this.props.username);
		client.on('initialData', (message) => {
			this.setState({list: message});
		});
		client.on('update', (message) => {
			console.log(message);
			this.setState({list: message});
		});
	}
    // fetching the GET route from the Express server which matches the GET route from server.js
	callBackendAPI = async () => {
	//	const response = await fetch('http://puppygifs.tumblr.com/api/read/json/');
		const response = await fetch('https://nuclei-texting.herokuapp.com/express_backend/');
		const body = await response.json();
		if (response.status !== 200) 
		{
			throw Error(body.message) 
		}
		return body;
	};

	componentWillUnmount() {}
	render() 
	{
		let i = 0;	
		return ( 
				<div>
				<div className = "list">
					<Setup />{this.state.list.map((e) => <Message info = {e} key = {i++} />)}
				</div>
				<Send client = {this.props.client} username = {this.props.username} />
		
			</div>)
	}
}

export default List;