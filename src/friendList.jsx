import React from 'react';
import './friends.css';
import logo from './logo1.svg';
class FriendList extends React.Component
{
	render()
	{
		return (<div id = "friendList">
			<div className = "person"><img src={logo} className="App-logo" alt="logo" /><p className = "fName">Zhipeng</p></div>
			<div className = "person"><img src={logo} className="App-logo" alt="logo" /><p className = "fName">Tiffanie</p></div>
			<div className = "person"><img src={logo} className="App-logo" alt="logo" /><p className = "fName">Victor</p></div>
			<div className = "person"><img src={logo} className="App-logo" alt="logo" /><p className = "fName">Peng</p></div>
			<div className = "person"><img src={logo} className="App-logo" alt="logo" /><p className = "fName">Your Mom</p></div>
		</div>)
	}
}

export default FriendList;