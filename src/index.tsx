import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App _state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 changeNewText={store.changeNewText.bind(store)}
                 newMessage={store.newMessage.bind(store)}
                 changeNewMessage={store.changeNewMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








