import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./comments.sass";

function CommentsBlock({ comments }) {
	return (
		<div className='comments'>
			<ul className='comments__body'>
				{comments?.length > 0
					? comments.map((comment) => (
							<li className='comments__comment'>
								<Comment comment={comment} key={comment.id} />
							</li>
					  ))
					: "Комментарии не найдены"}
			</ul>
		</div>
	);
}

CommentsBlock.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
};

export default CommentsBlock;
