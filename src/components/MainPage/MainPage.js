import React from "react";
import PropTypes from "prop-types";
import Comments from "../Comments/Comments";
import Filters from "../Filters/Filters";
import "./main-page.sass";

function MainPage({ comments, domains, filters }) {
	return (
		<div className='filtered'>
			<header className='header'>Filtered List</header>
			<Filters domains={domains} filters={filters} />
			<Comments comments={comments} />
		</div>
	);
}

Filters.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object),
	domains: PropTypes.arrayOf(PropTypes.string),
	filters: PropTypes.shape({
		searchFilter: PropTypes.string,
		setSearchFilter: PropTypes.func,
		domainFilter: PropTypes.string,
		setDomainFilter: PropTypes.func,
	}),
};

export default MainPage;
