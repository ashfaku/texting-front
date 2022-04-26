import React from 'react';
import './friends.css';
import Person from './person.jsx';
class FriendList extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			list: this.props.list
		};
		this.props.client.on('requestL', (m) => {
			this.setState({ list: m});
		});
	}
	comp
	render()
	{
		let i = -1;
		return (<div id = "friendList">
			{this.state.list.map((e) => <Person key = {++i} name = {e} />)}
		</div>)
	}
}

export default FriendList;