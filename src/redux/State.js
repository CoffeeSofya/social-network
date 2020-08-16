let rerenderEntireTree = () => {
  console.log('State changed');
}

let state = {

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
      { id: 1, message: 'higggggggg gggggggggggg gggggggggggg gggggggggggg gggggggggggggg gggggggggggggggggggg ggggggggggggggggggggggggggg gggggggggggg ggggggggggggggg ggggggggggggggggggg ggggggggggggggggggggggg ggggggggggggg gggggggggggggggggggg gggggggggggggggggg ggggggggggggggggggggg gggggggg' },
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}


export const toSend = () => {
  let newMessage = {
    id: 2,
    message: state.dialogsPage.newMessageText
  };
  state.dialogsPage.messages.push(newMessage);
  // state.dialogsPage.newMessageText = '';
  rerenderEntireTree();
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}


export default state;