import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Main from "../components/main/Main";


export function setMainStorage (Obj) {
	const mainChatStorage = JSON.parse(localStorage.getItem("MainChatStorage") || "{}")
	const newState = { ...mainChatStorage, ...Obj }
	localStorage.setItem("MainChatStorage", JSON.stringify(newState))
	window.dispatchEvent(new Event("storage"))
}

function App () {
	useEffect(() => {
		window.addEventListener("storage", () => {
			let mainChatStorage = JSON.parse(window.localStorage.getItem("MainChatStorage") || "{}")
			if (!mainChatStorage.Users) {
				setMainStorage({
					Users: [
						{
							id: 0,
							name: "silviu",
							image: "https://www.peterbe.com/avatar.random.png",
							active: true,
							isOnline: true,
							messages:
								[
									{
										key: 1,
										image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
										type: "",
										msg: "Hi Silviu, How are you?"
									}
									]
						},
						{
							id: 1,
							name: "Alina",
							image: "https://www.peterbe.com/avatar.random.png",
							active: true,
							isOnline: false,
							messages:[
								{
									key: 1,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi Aliiinaaa, How are you?", },
								{
									key: 2,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi Aliiinaaa, How are you?",
								}]
						},
						{
							id: 2,
							name: "Rsd",
							image: "https://www.peterbe.com/avatar.random.png",
							active: true,
							isOnline: false,
							messages:[
								{
									key: 1,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi Aliidsfsdffdsinaaa, How are you?", },
								{
									key: 2,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi Aliiidfsddsffds, How are you?",

								},{
									key: 3,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi How are you?",

								},{
									key: 4,
									image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
									type: "",
									msg: "Hi  you?",

								}]
						}
					],
					CurrentChat: ''
				})
			}

		})

		window.dispatchEvent(new Event("storage"))
	}, [])

	return (
		<div className="__container">
			<Routes>
				<Route element={<Layout/>}>
					<Route path="/" element={<Main/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
