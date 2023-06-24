const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Buy" },
    { id: 3, message: "Wow" },
    { id: 4, message: "Bla bla" },
    { id: 5, message: "Hahaha" },
  ],
  dialogsData: [
    { id: 1, name: "Daria" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Tosha" },
    { id: 4, name: "Lesha" },
    { id: 5, name: "Vasya" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
