import React from "react";
import Avatar from "../contacts/Avatar";


function ChatItem (props) {
	return (
		<div
			style={{ animationDelay: `0.8s` }}
			className={`chatMessages__item ${props.user ? props.user : ""}`}
		>
			<div className="chatMessages__item_content">
				<div className="chatMessages__message">{props.message}</div>
			</div>
			<Avatar isOnline="active" image={props.image}/>
		</div>
	);
}

export default ChatItem;