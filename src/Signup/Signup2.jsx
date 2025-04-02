import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navgaite = useNavigate();
  function handlesignup() {
    if (email.trim() === "" || password.trim() === "") {
      seterror("please write your email or password");
    } else {
      seterror("");
      navgaite("/Home");
    }
  }
  return (
    <>
      <div className="Contact">
        <button>Contact us</button>
      </div>
      <div className="main-continer">
        <div className="container">
          <div className="logo-signintxt">
            <img src="/images/subscription.png" alt="Logo" />
            <h2>Please write email and password to sign up</h2>
          </div>
          <div className="input-container">
            <h2
              className="email-password"
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </h2>
            <input type="text" />
            <h2
              className="email-password"
              onChange={(e) => setpassword(e.target.value)}
            >
              Password
            </h2>
            <input type="password" />
            {error && <p style={{ fontWeight: "bold" }}>{error}</p>}
            <button className="signupbtn" onClick={handlesignup}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
