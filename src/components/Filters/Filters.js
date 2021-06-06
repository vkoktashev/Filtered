import React from "react";

function Filters({
	domains,
	searchFilter,
	setSearchFilter,
	domainFilter,
	setDomainFilter,
}) {
	return (
		<div className='filters'>
			<div className='filters__body'>
				<div className='filters__label'>Search</div>
				<input
					type='text'
					placeholder='Enter Name'
					className='filters__search-input'
					value={searchFilter}
					onChange={(event) => setSearchFilter(event.target.value)}
				/>
				<div className='filters__domains-list'>
					<div className='filters__label'>Show only</div>
					{domains.map((domain) => (
						<button
							onClick={() => {
								domainFilter === domain
									? setDomainFilter("")
									: setDomainFilter(domain);
							}}
							className={`filters__domain ${
								domainFilter === domain ? "filters__domain_active" : ""
							}`}
						>
							{domain}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default Filters;
