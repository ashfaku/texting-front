import React from 'react';
import './friends.css';
import Person from './person.jsx';
class FriendList extends React.Component
{
	render()
	{
		let i = -1;
		var names = ['Zhipeng', 'Tiffanie', 'Victor', 'Peng', 'Your Mother'];
		return (<div id = "friendList">
			{names.map((e) => <Person key = {++i} name = {e} />)}
		</div>)
	}
}

export default FriendList;