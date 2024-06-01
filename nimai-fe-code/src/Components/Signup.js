import React, { useState } from "react";
import { signupAction } from "../Store/Actions/SignupAction";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    dispatch(signupAction(data));
    alert("signup successful");
  };
  return (
    <>
      <h3>Sign up</h3>
      <input
        onChange={handleChange}
        type="text"
        id="login"
        name="name"
        placeholder="name"
        value={data.name}
      />
      <input
        onChange={handleChange}
        type="email"
        id="email id"
        placeholder="Email"
        value={data.email}
        name="email"
      />
      <input
        onChange={handleChange}
        type="password"
        id="password"
        placeholder="Password"
        value={data.password}
        name="password"
      />
      <input
        onChange={handleChange}
        type="password"
        id="password"
        placeholder="Confirm Password"
        value={data.confirmPassword}
        name="confirmPassword"
      />
      <button type="submit" onClick={handleSubmit} id="signup-submit">
        Submit
      </button>
    </>
  );
}

export default Signup;
