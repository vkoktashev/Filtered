import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import * as selectors from "../../store/reducer";

import Comments from "../Comments/Comments";
import Filters from "../Filters/Filters";

function MainPage({ comments, requestComments }) {
	const [filteredComments, setFilteredComments] = useState([]);
	const [domainFilter, setDomainFilter] = useState("");
	const [searchFilter, setSearchFilter] = useState("");
	const domains = useMemo(() => getDomains(comments), [comments]);

	useEffect(() => {
		requestComments();
	}, [requestComments]);

	useEffect(() => {
		setFilteredComments(
			comments?.filter(
				(comment) =>
					comment?.email?.endsWith(domainFilter) &&
					comment?.name?.includes(searchFilter)
			)
		);
	}, [domainFilter, searchFilter, comments]);

	function getDomains(comments) {
		let domains = [];
		for (let comment in comments) {
			let domain = "." + comments[comment]?.email?.split(".").pop();
			if (domains.indexOf(domain) === -1) domains.push(domain);
		}
		return domains;
	}

	return (
		<div className='filtered'>
			<header className='header'>Filtered List</header>
			<Filters
				domains={domains}
				searchFilter={searchFilter}
				setSearchFilter={setSearchFilter}
				domainFilter={domainFilter}
				setDomainFilter={setDomainFilter}
			/>
			<Comments comments={filteredComments} />
		</div>
	);
}

const mapStateToProps = (state) => ({
	comments: selectors.getComments(state),
});

const mapDispatchToProps = (dispatch) => {
	return {
		requestComments: () => {
			dispatch(actions.requestComments());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
