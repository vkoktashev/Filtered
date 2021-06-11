import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQueryParam, StringParam, withDefault } from "use-query-params";
import { requestComments } from "../../store/filteredSlice";
import MainPage from "./MainPage";

function MainPageContainer() {
	const comments = useSelector((state) => state.comments);
	const dispatch = useDispatch();

	const [domainFilter, setDomainFilter] = useQueryParam(
		"domain",
		withDefault(StringParam, "")
	);
	const [searchFilter, setSearchFilter] = useQueryParam(
		"query",
		withDefault(StringParam, "")
	);

	const domains = useMemo(
		() =>
			comments.reduce((newDomains, currentValue) => {
				let domain = "." + currentValue.email?.split(".").pop();
				if (newDomains.indexOf(domain) === -1) newDomains.push(domain);
				return newDomains;
			}, []),
		[comments]
	);

	const filteredComments = useMemo(
		() =>
			comments?.filter(
				(comment) =>
					comment?.email?.endsWith(domainFilter) &&
					comment?.name?.includes(searchFilter)
			),
		[comments, domainFilter, searchFilter]
	);

	useEffect(() => {
		dispatch(requestComments());
	}, [dispatch]);

	return (
		<MainPage
			comments={filteredComments}
			domains={domains}
			filters={{
				domainFilter,
				setDomainFilter,
				searchFilter,
				setSearchFilter,
			}}
		/>
	);
}

export default MainPageContainer;
