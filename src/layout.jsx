import List from './list.jsx';
import Panel from './panel.jsx';
import FriendList from './friendList.jsx';
import React from 'react';

class Layout extends React.Component
{
	render()
	{
		return (<div> 
			<FriendList list = {this.props.user.friendList} />
			<List client = {this.props.client} username = {this.props.user.username} />
			<Panel />
		</div>);
	}
}

export default Layout;