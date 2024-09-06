import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();

  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <h1>LOGO.</h1>
        </Link>
        <div className="btns">
          {auth ? (
            <button onClick={logout} to="/logout" className="btn-login">
              Log out
            </button>
          ) : (
            <>
              <button className="btn-login">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn-sign">
                <Link to="/signup">SignUp</Link>
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
