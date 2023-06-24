import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCSESS = "INITIALIZED_SUCCSESS";

let initialState = {
  inintialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCSESS:
      console.log(state.isAuth);
      return {
        ...state,
        inintialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCSESS });
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  // debugger;
  Promise.all([promise])
  .then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
