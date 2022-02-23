import React, { useState, createRef, useEffect } from "react";
import './chatMessages.css'
import Avatar from '../contacts/Avatar';
import ChatItem from "./ChatItem";
import {setMainStorage} from '../../app/App'

let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")

const chatItems = [];

function ChatMessages (props) {
	const [chat, setChat] = useState(chatItems);
	const [message, setMessage] = useState("");
	const [userIndex, setUserIdex] = useState(0);


	useEffect(() => {
		mainChatStorage.Users.forEach((user,index) => {
			if(user.name === mainChatStorage.CurrentChat) {
				setUserIdex(user.id)
				console.log(user.messages)
				setChat(user.messages)
			}
			return ""
		})
	}, [userIndex, chat])

		window.addEventListener("keydown", (e) => {
			if(e.key === 'Enter') {
				if(message !== "") {

					let newMainChatStorage = mainChatStorage.Users.filter((id) => id.id !== userIndex)
					let newState = mainChatStorage.Users.filter((id) => id.id === userIndex)
					console.log(newState[0].messages)
					console.log(newState)
					setMainStorage(
						{
							Users: [
								{
									id:newState[0].id,
									name: newState[0].name,
									image:newState[0].image,
									isOnline: newState[0].isOnline,
									active:newState[0].active,
									messages: [...newState[0].messages, { key:newState[0].messages.length + 1, image:"https://www.peterbe.com/avatar.random.png", msg: message, type:"" }]
								}, ...newMainChatStorage]
						})
					setChat([...chatItems] );
					setMessage("")
				}
			}
		})


	const onStateChange = (e) => {
		console.log(e.target.value)
		setMessage(e.target.value)
	}

	return (
		<div className='main__chatcontent'>
			<div className='content__header'>
				<div className='block'>
					<div className='current-chatting-user'>
						<Avatar
							isOnline="active"
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
						/>
						<p>User</p>
					</div>
				</div>
				<div className='blocks'>
					<div className='settings'>
						<button className='btn-nobg'>
							<i className='fa fa-cog'/>
						</button>
					</div>
				</div>
			</div>
			<div className='content__body'>
				<div className='chat__items'>
					{chat.map((itm, index) => {
						return (
							<ChatItem
								animationDelay={index+2}
								key={itm.key}
								user={itm.type ? itm.type : 'me'}
								message={itm.msg}
								image={itm.image}
							/>
						)
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
					<button className="btnSendMsg" id="sendMsgBtn">
						<i className="fa fa-paper-plane"/>
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatMessages;