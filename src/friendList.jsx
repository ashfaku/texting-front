import React from 'react';
import './friends.css';
import Person from './person.jsx';
class FriendList extends React.Component
{
	render()
	{
		let i = -1;
		return (<div id = "friendList">
			{this.props.list.map((e) => <Person key = {++i} name = {e} />)}
		</div>)
	}
}

export default FriendList;