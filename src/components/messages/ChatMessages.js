import React, { useState, createRef, useEffect } from "react";
import './chatMessages.css'
import Avatar from '../contacts/Avatar';

const chatItems = [
	{
		key: 1,
		image:
			"https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
		type: "",
		msg: "Hi Tim, How are you?",
	},
];

function ChatMessages (props) {
	const [chat, setChat] = useState(chatItems)
	const [message, setMessage] = useState("")
	const messagesEndRef = createRef(null);

	const handleScroll = () => {
		messagesEndRef.current.scrollIntoView({behavior: "smooth"})
	}
	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			if(e.key === 'Enter') {
				if(message !== "") {
					chatItems.push({
						key: chatItems.length + 1,
						type: "",

					})
				}
			}
		})
	})
	return (
		<div>

		</div>
	);
}

export default ChatMessages;