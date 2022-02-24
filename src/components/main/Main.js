import React, { useEffect, useState } from "react";
import "./main.css"
import ChatContacts from "../contacts/ChatContacts";
import ChatMessages from "../messages/ChatMessages";


function Main () {
	const [ mainChatStorage, setMainChatStorage ] = useState("");

	useEffect(() => {
		let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")
		setMainChatStorage(mainChatStorage)

		window.addEventListener("storage", () => {
			let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")
			setMainChatStorage(mainChatStorage)
		})
	}, [])

	if (!mainChatStorage) {
		return null;
	}
	return (
		<div className="__main_body">
			<ChatContacts mainChatStorage={mainChatStorage}/>
			<ChatMessages mainChatStorage={mainChatStorage}/>
		</div>
	);
}

export default Main;