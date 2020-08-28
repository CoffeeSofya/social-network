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
  getState() {
    debugger;
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  toSend() {
    let newMessage = {
      id: 2,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
}


















// let rerenderEntireTree = () => {
//   console.log('State changed');
// }

// let state = {

//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi, how are you?', likeCount: 10 },
//       { id: 2, message: 'It is my first post!', likeCount: 20 }
//     ],
//     newPostText: ''
//   },

//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: 'Sonya' },
//       { id: 2, name: 'Dima' },
//       { id: 3, name: 'Kira' },
//       { id: 4, name: 'Tema' },
//       { id: 5, name: 'Tanya' }
//     ],
//     messages: [
//       { id: 1, message: 'hi' },
//       { id: 2, message: 'hi-hi' },
//       { id: 1, message: 'hihihihi' },
//       { id: 2, message: 'hi-hi-hi' },
//       { id: 1, message: 'hihihihihihi' }
//     ],
//     newMessageText: ''
//   },

//   sidebar: {
//     friends: [
//       { id: 1, name: 'Sonya' },
//       { id: 2, name: 'Dima' },
//       { id: 3, name: 'Kira' }
//     ]
//   }
// }

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likeCount: 0
//   };
//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   rerenderEntireTree();
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree();
// }


// export const toSend = () => {
//   let newMessage = {
//     id: 2,
//     message: state.dialogsPage.newMessageText
//   };
//   state.dialogsPage.messages.push(newMessage);
//   rerenderEntireTree();
// }

// export const updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree();
// }

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }


// export default state;
export default store;

window.store = store;