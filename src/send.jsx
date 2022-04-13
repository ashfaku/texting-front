import React from 'react';
import './send.css';
class Send extends React.Component
{
	async send()
	{
		const docData = 
		{
			stringExample: document.getElementById("sendMsg").value,
		};
		var elements = document.getElementsByClassName("name");
		console.log(elements);
                console.log(docData);
	}
	render()
	{
		return <div id = "sendDiv">
			<input type = "text" id = "sendMsg"></input>
			<button id = "send" onClick={this.send}><i className = "fa fa-paper-plane"></i></button>
		</div>
	}

}

export default Send;
