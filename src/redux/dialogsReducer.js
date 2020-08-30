const TO_SEND = 'TO-SEND';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch(action.type){
    case TO_SEND : 
    let newMessage = {
      id: 2,
      message: state.newMessageText
    }
    state.newMessageText = '';
    state.messages.push(newMessage);
    return state;

    case UPDATE_NEW_MESSAGE_TEXT : 
    state.newMessageText = action.newText;
    return state;

    default :
    return state;
  }

  return state;
}


export const toSendActionCreator = () => ({type: TO_SEND})

export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;