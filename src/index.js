import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import MainPageContainer from "./components/MainPage/MainPageContainer";

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<QueryParamProvider ReactRouterRoute={Route}>
				<MainPageContainer />
			</QueryParamProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

export default store;
