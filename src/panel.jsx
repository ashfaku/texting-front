import React from 'react';
import Login from './login.jsx';
import * as ReactDOMClient from 'react-dom/client';
import SettingPanel from './settingpanel.jsx';
import './panel.css';
class Panel extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			settingsVisible: false
		};
		this.settings = this.settings.bind(this);
	}
	settings = () =>
	{
		this.setState({
			settingsVisible: !this.state.settingsVisible
		});
	}
	signOut()
	{
		const root = ReactDOMClient.createRoot(document.getElementById('root'));
	//	root.render(<Login />);
	}
	render()
	{
		return <div id = "panel">		
			<i className = "fa fa-gear" onClick = {this.settings}></i>
			<i className = "fa fa-sign-out" onClick = {this.signOut}></i>
			{
				this.state.settingsVisible ? <SettingPanel /> : <span></span>
            }

		</div>
	}
}

export default Panel;