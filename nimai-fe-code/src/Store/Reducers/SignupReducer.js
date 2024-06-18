import { SIGNUP_API_SUCCESS } from "../Actions/actionTypes";

const initialState = { loading: true, error: "", signupResponse: null };

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_API_SUCCESS:
      return { ...state, signupResponse: action.payload.res };
    default:
      return state;
  }
}

export default signupReducer;
