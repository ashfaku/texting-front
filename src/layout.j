import List from './list.jsx';
import Panel from './panel.jsx';
import FriendList from './friendList.jsx';
import React from 'react';

class Layout extends React.Component
{
	render()
	{
		return (<div> 
			<FriendList />
			<List />
			<Panel />
		</div>);
	}
}

export default Layout;