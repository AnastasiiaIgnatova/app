import {addPostActionCreator} from "./profile-reducer";
// import App from '../App';
// import React from 'react';

it("length of posts should be incremented", () => {
  //1. test data
  let action = addPostActionCreator("hola!");
  let state = {
    posts: [
      { id: 1, message: "First post", likesCount: "12" },
      { id: 2, message: "Second post", likesCount: "5" },
    ],
  };

  //2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});
