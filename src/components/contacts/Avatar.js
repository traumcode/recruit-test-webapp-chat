import React from "react";


function Avatar (props) {
	return (
		<div className='avatar'>
			<div className='avatar-img'>
				<img src={props.image} alt={props.image}/>
			</div>
			<span className={`isOnline ${props.isOnline}`}/>
		</div>
	);
}

export default Avatar;