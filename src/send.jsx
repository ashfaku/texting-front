import React from 'react';
class Send extends React.Component
{
	async send()
	{
		const docData = 
		{
			stringExample: document.getElementById("input").value,
		};
		var elements = document.getElementsByClassName("name");
		console.log(elements);
                console.log(docData);
	}
	render()
	{
		return <div>
		<input type = "text" id = "input"></input>
		<button id = "send" onClick={this.send}>Send</button>
		</div>
	}

}

export default Send;
