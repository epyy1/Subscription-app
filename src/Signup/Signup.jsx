import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  function handleNext() {
    if (firstName.trim() === "" || lastName.trim() === "") {
      setError("Please write your full name");
    } else {
      setError("");
      navigate("/signup2");
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
          </div>
          <div className="input-container">
            <h2 className="email-password">First name</h2>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <h2 className="email-password">Last name</h2>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {error && <p style={{ fontWeight: "bold" }}>{error}</p>}

            <button className="signupbtn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
