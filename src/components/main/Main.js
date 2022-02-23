import React from "react";
import './main.css'
import ChatContacts from "../contacts/ChatContacts";
import ChatMessages from "../messages/ChatMessages";

function Main () {
	return (
		<div className='__main_body'>
			<ChatContacts/>
			<ChatMessages/>
		</div>
	);
}

export default Main;