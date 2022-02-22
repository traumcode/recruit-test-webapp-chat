import React from "react";
import './main.css'
import ChatContacts from "../contacts/ChatContacts";
import ChatMessages from "../messages/ChatMessages";
import ChatUserProfile from "../user/ChatUserProfile";

function Main () {
	return (
		<div className='__main_body'>
			<ChatContacts/>
			<ChatMessages/>
			<ChatUserProfile/>
		</div>
	);
}

export default Main;