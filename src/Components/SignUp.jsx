import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/dashbord");
    }
  }, []);

  const collectDate = async () => {
    let result = await fetch("http://localhost:3500/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
  };
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1 className="signup-text">Sign Up</h1>

          <label htmlFor="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />

          <label htmlFor="">Email</label>
          <input
            type="Email"
            value={email}
            className="input-Email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          />

          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input-password"
            placeholder="password..."
          />

          <button onClick={collectDate} className="signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
