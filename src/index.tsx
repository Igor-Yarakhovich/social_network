import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, changeNewMessage, changeNewText, newMessage, state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 changeNewText={changeNewText}
                 newMessage={newMessage}
                 changeNewMessage={changeNewMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








