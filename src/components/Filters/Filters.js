import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./filters.sass";

function Filters({ domains, filters }) {
	return (
		<div className='filters'>
			<div className='filters__body'>
				<div className='filters__label'>Search</div>
				<input
					type='text'
					placeholder='Enter Name'
					className='filters__search-input'
					value={filters.searchFilter}
					onChange={(event) => filters.setSearchFilter(event.target.value)}
				/>
				<div className='filters__domains-list'>
					<div className='filters__label'>Show only</div>
					{domains.map((domain) => (
						<button
							onClick={() => {
								filters.domainFilter === domain
									? filters.setDomainFilter("")
									: filters.setDomainFilter(domain);
							}}
							className={classNames("filters__domain", {
								filters__domain_active: filters.domainFilter === domain,
							})}
							key={domain}
						>
							{domain}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

Filters.propTypes = {
	domains: PropTypes.arrayOf(PropTypes.string),
	filters: PropTypes.shape({
		searchFilter: PropTypes.string,
		setSearchFilter: PropTypes.func,
		domainFilter: PropTypes.string,
		setDomainFilter: PropTypes.func,
	}),
};

export default Filters;
