import { combineReducers } from "redux";
import signupReducer from "./SignupReducer";
import loadingReducer from "./loadingReducer";
export default combineReducers({
  // left side name will be stated as name in store
  loadingState: loadingReducer,
  signupState: signupReducer,
});
