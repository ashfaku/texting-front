import React from 'react';
import './friends.css';
import Person from './person.jsx';
class FriendList extends React.Component
{
	render()
	{
		var names = ['Zhipeng', 'Tiffanie', 'Victor', 'Peng', 'Your Mother'];
		return (<div id = "friendList">
			{names.map((e) => <Person name = {e} />)}
		</div>)
	}
}

export default FriendList;