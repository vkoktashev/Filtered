import React from "react";

function Comment({ comment, className }) {
	return (
		<div className={"comment " + className}>
			<div className='comment__body'>
				<h1 className='comment__header'>{comment.name}</h1>
				<h6 className='comment__email'>{comment.email}</h6>
				<p className='comment__text'>{comment.body}</p>
			</div>
		</div>
	);
}

export default Comment;
