import React, { useState } from "react";
import "./chatContacts.css"
import ChatContactsItems from "./ChatContactsItems";
import { setMainStorage } from "../../app/App";


function ChatContacts ({ mainChatStorage }) {
	const [ user, setUser ] = useState("")

	const chats = mainChatStorage.Users.filter((user) => user.name)

	const handleNewChat = () => {
		const element = document.getElementById("new-input")
		if (window.getComputedStyle(element).display === "block") {
			document.getElementById("new-input").style.display = "none"
		} else {
			document.getElementById("new-input").style.display = "block"
		}
	}

	const handleNewUser = () => {
		const findUser = mainChatStorage.Users.find((usr) => usr.name === user)
		if (findUser === undefined) {
			setMainStorage(
				{
					Users: [ ...mainChatStorage.Users,
						{
							id: mainChatStorage.Users.length,
							name: user,
							image: "",
							isOnline: true,
							active: true,
							messages: [ {} ]
						} ]
				})
		} else {
			setMainStorage({ CurrentChat: user })
		}
		handleNewChat()
	}


	return (
		<div className="main__chatcontacts">
			<button className="btn" onClick={() => handleNewChat()}>
				<i className="fas fa-plus-square"/>
				<span>Start new chat</span>
			</button>
			<div id="new-input" style={{ display: "none" }}>
				<input type="text" onChange={(e) => {setUser(e.target.value)}} className="form__field"/>
				<button type="submit" className="btnn btnn--primary btnn--inside uppercase" onClick={() => handleNewUser()}>Ok</button>
			</div>
			<div className="chatcontacts__head">
				<h2>Chats</h2>
				<button className="btn-nobg">
					<i className="fa fa-ellipsis-h"/>
				</button>
			</div>
			<div className="chatcontacts__items">
				{chats.length ? chats.map((user, index) => {
					if (user.name.split(" ").length === 1) {
						return (
							<ChatContactsItems
								key={user.id}
								name={user.name}
								animationDelay={index + 1}
								image={user.image}
								active={user.active ? "active" : ""}
								isOnline={user.isOnline ? "active" : ""}
							/>)
					} else {
						return (
							<ChatContactsItems
								key={user.id}
								name={"GROUP CHAT" + " " + user.name}
								animationDelay={index + 1}
								image={user.image}
								active={user.active ? "active" : ""}
								isOnline={user.isOnline ? "active" : ""}
							/>)
					}

				}) : <div>You have no conversations,</div>}
			</div>
		</div>

	);
}

export default ChatContacts;