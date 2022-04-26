import List from './list.jsx';
import Panel from './panel.jsx';
import FriendList from './friendList.jsx';
import React from 'react';

class Layout extends React.Component
{
	render()
	{
		return (<div> 
			<FriendList client = {this.props.client} list = {this.props.user.friendList} />
			<List client = {this.props.client} user = {this.props.user} />
			<Panel client = {this.props.client} username = {this.props.user.username} />
		</div>);
	}
}

export default Layout;