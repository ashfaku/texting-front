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
		this.state = { names: [], texts : [] };
	}
	async componentDidMount() 
	{
//		let b = await this.callBackendAPI();//.then(res => 
		//console.log(b);
		this.setState({ names: ['Tofu', 'Vicky', 'Tofu', 'Vicky', 'Tofu', 'Vicky', 'Tofu', 'Vicky', 'Tofu', 'Vicky', 'Tofu', 'Vicky' ] });//.catch(err => console.log(err));
	}
    // fetching the GET route from the Express server which matches the GET route from server.js
	callBackendAPI = async () => 
	{
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
					<Setup />{this.state.names.map((e) => <Message name = {e} text = "idkrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrk" color = "red" key = {i++} />)}
				</div>
				<Send />
		
			</div>)
	}
}

export default List;