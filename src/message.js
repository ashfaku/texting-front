import React from 'react';
class Message extends React.Component
{
	render()
	{
		console.log(this.props.color);
		return <div className = "message">
			<div className = "header">
				<span className = "name">Tofu</span>		
				<span className = "date">idk</span>
			</div>
			<div className = "text">{this.props.text}</div>
		</div>
	}
}

export default Message;