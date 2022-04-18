import React from 'react';
class Message extends React.Component
{
	render()
	{
		let info = this.props.info;
		return <div className = "message">
			<div className = "header">
				<span className = {`name ${info.color}`}>{info.name}</span>		
				<span className = "date">{info.date}</span>
			</div>
			<div className = "text">{info.msg}</div>
		</div>
	}
}

export default Message;