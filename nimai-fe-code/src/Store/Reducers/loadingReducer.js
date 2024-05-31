const initialState = { isLoading: false };

function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING_TRUE":
      return { ...state, isLoading: true };
    case "LOADING_FALSE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
}

export default loadingReducer;
