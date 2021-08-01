import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./routes";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";

const App = () => {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <Routes />
        </Provider>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
