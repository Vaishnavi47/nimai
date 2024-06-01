import axios from "axios";

import { LOADING_FALSE, LOADING_TRUE, SIGNUP_API_SUCCESS } from "./actionTypes";

export const signupAction = (userData) => {
  const apiUrl = `http://localhost:8080/api/signup`;
  const body = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
  };

  return async (dispatch) => {
    dispatch({ type: LOADING_TRUE });
    try {
      const response = await axios.post(apiUrl, body);
      if (response.status === 200) {
        dispatch({
          type: SIGNUP_API_SUCCESS,
          payload: { res: response.data },
        });
      } else {
        console.log(
          "code: ",
          response.data.code,
          "message: ",
          response.data.message
        );
        dispatch({
          type: LOADING_FALSE,
          payload: "Invalid userId or password",
        });
      }
    } catch (error) {
      console.log("error: ", error);
      //   dispatch({
      //     type: signupAction_FAILURE,
      //     payload: "Error in signupAction",
      //   });
    }
  };
};
