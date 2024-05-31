const initialState = { loading: true, error: "" };

function signupReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_API_SUCCESS":
      return { ...state, signupResponse: action.response };
    default:
      return state;
  }
}

export default signupReducer;
