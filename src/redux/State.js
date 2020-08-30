import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 10 },
        { id: 2, message: 'It is my first post!', likeCount: 20 }
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Sonya' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Kira' },
        { id: 4, name: 'Tema' },
        { id: 5, name: 'Tanya' }
      ],
      messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hi-hi' },
        { id: 1, message: 'hihihihi' },
        { id: 2, message: 'hi-hi-hi' },
        { id: 1, message: 'hihihihihihi' }
      ],
      newMessageText: ''
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Sonya' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Kira' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

}

export default store;
window.store = store;