import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/dashbord");
    }
  }, []);

  const handelLogin = async () => {
    let result = await fetch("http://localhost:3500/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.result));
      localStorage.setItem("token", JSON.stringify(result.auth));
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Log in</h1>
          <label htmlFor="">Email</label>
          <input
            type="Email"
            className="input-Email"
            onClick={(e) => setEmail(e.target.value)}
            placeholder="Email..."
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="input-password"
            onClick={(e) => setPassword(e.target.value)}
            placeholder="password..."
          />
          <button onSubmit={handelLogin} className="signup-btn">
            Submit
          </button>
          <span className="no-account">
            Don't have an account?
            <Link className="signup" to="/signup">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
