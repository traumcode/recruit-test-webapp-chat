import React, { useState } from "react";
import "./chatContacts.css"
import Avatar from "./Avatar";
import { setMainStorage } from "../../app/App";


function ChatContactsItems (props) {
	const [ user, setUser ] = useState("");

	let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")

	const handleChat = (e) => {
		for (let i = 0; i < e.currentTarget.parentNode.children.length; i++) {
			e.currentTarget.parentNode.children[i].classList.remove("active");
		}
		e.currentTarget.classList.add("active");
		setUser(mainChatStorage.CurrentChat)
	}

	return (
		<div
			style={{ animationDelay: `0.${props.animationDelay}s` }}
			onClick={(e) => {
				handleChat(e);
				setMainStorage({ CurrentChat: e.currentTarget.children[1].firstChild.innerHTML })
			}}
			className={`chatcontacts__item ${props.active ? props.active : ""}`}
		>
			<Avatar
				image={props.image ? props.image : "https://www.peterbe.com/avatar.random.png"}
				isOnline={props.isOnline}
			/>
			<div className="user-info">
				<p>{props.name}</p>
				<span className="time">32 minutes ago</span>
			</div>
		</div>
	);
}

export default ChatContactsItems;