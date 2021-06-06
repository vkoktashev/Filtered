import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import MainPage from "./components/MainPage/MainPage";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<MainPage />
	</Provider>,
	document.getElementById("root")
);

export default store;
