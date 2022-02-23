import React, { useState } from "react";
import "./chatContacts.css"
import ChatContactsItems from "./ChatContactsItems";

let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")


function ChatContacts (props) {
	const [ chats, setChats ] = useState(mainChatStorage.Users)

	const handleNewChat =() => {

		const element = document.getElementById('new-input').style.display
		console.log(element)
	}
	return (
		<div className="main__chatcontacts">
			<button className="btn" onClick={() => handleNewChat()}>
				<i className="fas fa-plus-square"/>
				<span>Start new chat</span>
			</button>
			<div id='new-input'>
				<input type="text" />
				<button type='submit'>Ok</button>
			</div>
			<div className="chatcontacts__head">
				<h2>Chats</h2>
				<button className="btn-nobg">
					<i className="fa fa-ellipsis-h"/>
				</button>
			</div>
			<div className="chatcontacts__search">
				<div className="search_wr">
					<input type="text" placeholder="Search.." required/>
					<button className="btn-search">
						<i className="fa fa-search"/>
					</button>
				</div>
			</div>
			<div className="chatcontacts__items">
				{chats ? chats.map((user, index) => {
					return (
						<ChatContactsItems
							key={user.id}
							name={user.name}
							animationDelay={index + 1}
							image={user.image}
							active={user.active ? "active" : ""}
							isOnline={user.isOnline ? "active" : ""}
						/>)
				}) : <div>You have no conversations,</div>}
			</div>
		</div>

	);
}

export default ChatContacts;