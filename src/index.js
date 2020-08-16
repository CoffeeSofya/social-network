import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/State'
import App from './App';
import {addPost, updateNewPostText, toSend, updateNewMessageText} from './redux/State';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
      addPost={addPost}  
      updateNewPostText={updateNewPostText}
      toSend={toSend}
      updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
