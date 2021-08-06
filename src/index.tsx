import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {StateType} from "./redux/types";

let renderEntireTree = (_state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App _state={_state}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
    console.log('new subscribe')
    let _state = store.getState()
    renderEntireTree(_state)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








