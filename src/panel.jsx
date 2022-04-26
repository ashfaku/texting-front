import React from 'react';
//import Login from './login.jsx';
//import * as ReactDOMClient from 'react-dom/client';
import SettingPanel from './settingpanel.jsx';
import RequestPanel from './requestpanel.jsx';
import './panel.css';
class Panel extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			settingsVisible: false,
			friendRequest: false
		};
		this.settings = this.settings.bind(this);
		this.friendRequest = this.friendRequest.bind(this);
	
	}
	settings = () =>
	{
		this.setState({
			settingsVisible: !this.state.settingsVisible,
			friendRequest: false
		});
	}
	friendRequest()
	{
		this.setState({
			settingsVisible: false,
			friendRequest: !this.state.friendRequest
		});
	}
	signOut()
	{
	}
	render()
	{
		return <div id = "panel">		
			<i className = "fa fa-gear" onClick = {this.settings}></i>
			<i className = "fa fa-sign-out" onClick = {this.signOut}></i>
			<i className = "fa fa-sign-out" onClick = {this.friendRequest}></i>
			{this.state.settingsVisible ? <SettingPanel /> : <span></span>}
			{this.state.friendRequest ? <RequestPanel username = {this.props.username} client = {this.props.client} /> : <span></span>}
		
		</div>
	}
}

export default Panel;
