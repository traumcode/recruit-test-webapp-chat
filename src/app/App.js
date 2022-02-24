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
					Users: [ {} ],
					CurrentChat: ""
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
