
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "First post", likesCount: "12" },
        { id: 2, message: "Second post", likesCount: "5" },
      ],
      newPostText: "new post text",
    },
    dialogsPage: {
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
      newMessageBody: "",
    },
    friendsPage: {
      friends: [
        { id: 1, name: "Daria" },
        { id: 2, name: "Valera" },
        { id: 3, name: "Tosha" },
        { id: 4, name: "Lesha" },
        { id: 5, name: "Vasya" },
      ],
    },
  },
  _callSubcriber() {
    console.log("state is changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubcriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._callSubcriber(this._state);
  },
};





export default store;
window.store = store;
