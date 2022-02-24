import React, { useEffect, useState } from "react";
import "./chatMessages.css"
import Avatar from "../contacts/Avatar";
import ChatItem from "./ChatItem";
import { setMainStorage } from "../../app/App"


function ChatMessages ({ mainChatStorage }) {
	const [ message, setMessage ] = useState("");
	const [ numberOfUsers, setNumberOfUsers ] = useState(0);
	const user = mainChatStorage.Users.find((user) => user.name === mainChatStorage.CurrentChat)
	const group = mainChatStorage.Users.find((user) => "GROUP CHAT " + user.name === mainChatStorage.CurrentChat)
	const userIndex = user?.id || group?.id
	const chat = user?.messages || []
	const groupChat = group?.messages || []
	const chats = mainChatStorage.Users.filter((user) => user.name)
	const groupChats = mainChatStorage.Users.filter((group) => group.name)

	useEffect(() => {
		group?.name ? setNumberOfUsers(group?.name.split(" ").length) : setNumberOfUsers(user?.name.split(" ").length)
		console.log(numberOfUsers)
	}, [ chats, numberOfUsers ])


	if (!user && !group) {
		return null;
	}


	window.addEventListener("keydown", (e) => {
		if (e.key === "Enter") {
			handleSubmit()
		}
	})

	const handleSubmit = () => {
		if (message !== "") {
			let newMainChatStorage = mainChatStorage.Users.filter((id) => id.id !== userIndex)
			let newState = mainChatStorage.Users.filter((id) => id.id === userIndex)
			setMainStorage(
				{
					Users: [
						{
							id: newState[0].id,
							name: newState[0].name,
							image: newState[0].image,
							isOnline: newState[0].isOnline,
							active: newState[0].active,
							messages: [ ...newState[0].messages, { key: newState[0].messages.length + 1, image: "https://www.peterbe.com/avatar.random.png", msg: message, type: "" } ]
						}, ...newMainChatStorage ]
				})
			setMessage("")
		}
	}
	const onStateChange = (e) => {
		setMessage(e.target.value)
	}

	return (
		<div className="main__chatcontent">
			<div className="content__header">
				<div className="block">
					<div className="current-chatting-user">
						<Avatar
							isOnline="active"
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
						/>
						<p>User</p>
					</div>
				</div>
				<div className="blocks">
					<div className="settings">
						<button className="btn-nobg">
							<i className="fa fa-cog"/>
						</button>
					</div>
				</div>
			</div>
			<div className="content__body">
				<div className="chat__items">
					{group?.name ? groupChat.map((itm, index) => {
						if (Object.keys(itm).length !== 0) {
							return (
								<div key={index}>
									<ChatItem
										animationDelay={index + 2}
										user={itm.type ? itm.type : "me"}
										message={itm.msg}
										image={itm.image}
									/>
									{[ ...Array(numberOfUsers) ].map((element, index) => (
										<div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
											<ChatItem
												animationDelay={index + 2}
												key={itm.key}
												user={itm.type ? itm.type : "me"}
												message={itm.msg + "❤️️"}
												image={itm.image}
											/>
										</div>
									))}
								</div>)
						}
					}) : chat.map((itmm, index) => {
						if (Object.keys(itmm).length !== 0) {
							return (
								<div key={index}>
									<ChatItem
										animationDelay={index + 2}
										user={itmm.type ? itmm.type : "me"}
										message={itmm.msg}
										image={itmm.image}
									/>

									<div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
										<ChatItem
											animationDelay={index + 2}
											key={itmm.key}
											user={itmm.type ? itmm.type : "me"}
											message={itmm.msg + "❤️️"}
											image={itmm.image}
										/>
									</div>
								</div>)
						}
					})}
				</div>
			</div>
			<div className="content__footer">
				<div className="sendNewMessage">
					<button className="addFiles">
						<i className="fa fa-plus"/>
					</button>
					<input
						type="text"
						placeholder="Type a message here"
						onChange={onStateChange}
						value={message}
					/>
					<button className="btnSendMsg" id="sendMsgBtn" onClick={() => handleSubmit()}>
						<i className="fa fa-paper-plane"/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatMessages;