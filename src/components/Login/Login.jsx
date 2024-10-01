import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = () => {
    console.log(email, password, "form submitted");
  };

  return (
    <div className="container">
      <h1>Login Page</h1>

      <div className="email-input">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="password-input">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" onClick={formSubmit}>
        Login
      </button>
    </div>
  );
}

export default Login;
