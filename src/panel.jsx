import React from 'react';
import './panel.css';
import SettingPanel from './settingpanel.jsx';
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