import React from 'react';
import './friends.css';
import logo from './logo1.svg';

class Person extends React.Component
{
	render()
	{
		return (<div> 
			<div className = "person"><img src={logo} className = "pfp" alt = "logo" /><p className = "fName">{this.props.name}</p></div>
		</div>)
	}
}

export default Person;