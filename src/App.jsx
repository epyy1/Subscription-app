import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn.jsx";
import Signup from "./signup/signup.jsx";
import Signup2 from "./Signup/Signup2.jsx";
import Home from "./Home/Home.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
