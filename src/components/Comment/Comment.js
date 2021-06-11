import React from "react";
import PropTypes from "prop-types";
import "./comment.sass";

function Comment({ comment }) {
	return (
		<div className='comment'>
			<div className='comment__body'>
				<h2 className='comment__header'>{comment.name}</h2>
				<h6 className='comment__email'>{comment.email}</h6>
				<p className='comment__text'>{comment.body}</p>
			</div>
		</div>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		name: PropTypes.string,
		email: PropTypes.string,
		body: PropTypes.string,
	}).isRequired,
	className: PropTypes.string,
};

export default Comment;
