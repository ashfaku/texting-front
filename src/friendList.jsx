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
		this.props.client.on('friends', (m) => {
			this.setState({list: m});
		});
		this.props.client.on('updateList', (m) => {
			var tmp = this.state.list;
			tmp.push(m);
			this.setState({list: tmp});
		});
	}
	swap = (e) =>
	{
		var tmp = this.state.list;
		var hold = tmp[0];
		tmp[0] = tmp[e];
		tmp[e] = hold;
		this.setState({list: tmp});
	}
	render()
	{
		let i = -1;
		return (<div id = "friendList">
			{this.state.list.map((e) => <Person key = {i++} name = {e} />)}
		</div>)
	}
}

export default FriendList;