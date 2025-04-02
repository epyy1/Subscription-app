import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const navigate = useNavigate();
  const user = {
    email: "test@test.com",
    password: "test123",
  };
  const [isLogedIn, setisLogedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === user.email) {
      if (password === user.password) {
        navigate("/Home");

        setisLogedIn(true);
      } else {
        seterrormessage("Wrong password");
      }
    } else {
      seterrormessage("Email not found ");
    }
  };
  return (
    <>
      <div className="Contact">
        <button>Contact us</button>
      </div>
      <div className="main-continer">
        <div className="container">
          <div className="logo-signintxt">
            <img src="/images/subscription.png" alt="Logo" />
            <h1>Sign in to your account</h1>
          </div>
          <div className="input-container">
            <h2 className="email-password">Email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2 className="email-password">Password</h2>
            <input
              value={password}
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
            {errormessage && <p className="Error-message">{errormessage}</p>}
            <Link className="link">
              <h4 className="F-password">Forget password ?</h4>
            </Link>
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="signup">
        <h4>Don’t have an account?</h4>
        <Link className="link" to="/signup">
          <h4>Sign up</h4>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
