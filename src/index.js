import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import List from './list.jsx';
import Panel from './panel.jsx';
import FriendList from './friendList.jsx';
//import Login from './login.jsx';
const container = document.getElementById('root');


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
// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(<Layout />);
