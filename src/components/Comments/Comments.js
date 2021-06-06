import React from "react";
import Comment from "../Comment/Comment";

function CommentsBlock({ comments }) {
	return (
		<div className='comments'>
			<div className='comments__body'>
				{comments?.length > 0
					? comments.map((comment) => (
							<Comment comment={comment} className='comments__comment' />
					  ))
					: "Комментарии не найдены"}
			</div>
		</div>
	);
}

export default CommentsBlock;
