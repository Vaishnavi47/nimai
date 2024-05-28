import React from "react";

function Login() {
  const handleSubmit = () => {
    alert("submited");
  };
  return (
    <>
      <h3>Login</h3>
      <input type="text" id="login" />
      <input type="password" id="password" />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default Login;
