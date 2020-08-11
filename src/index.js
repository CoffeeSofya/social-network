import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
  { id: 1, name: 'Sonya' },
  { id: 2, name: 'Dima' },
  { id: 3, name: 'Kira' },
  { id: 4, name: 'Tema' },
  { id: 5, name: 'Tanya' }
]

let messages = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'hi-hi' },
  { id: 3, message: 'hihihihi' },
  { id: 4, message: 'hi-hi-hi' },
  { id: 5, message: 'hihihihihihi' }
]

let posts = [
  { id: 1, message: 'Hi, how are you?', likeCount: 10 },
  { id: 2, message: 'It is my first post!', likeCount: 20 },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
