import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";


function Layout (props) {
	return (
		<>
			<Nav/>
			<main style={{width: '100%'}}>
				<Outlet/>
			</main>
		</>
	);
}

export default Layout;