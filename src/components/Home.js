import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to PopX</h1>
      <p style={{marginTop:30,marginBottom:30}}>
        Lorem ipsum dolor sit amet.
        <br />
        consectetur adipiscing elit,
      </p>
      <div className="create-acc">
        <Link to="/create-account">Create an Account</Link>
      </div>
      <div className="login">
        <Link to="/login">Already Registered? Login</Link>
      </div>
    </div>
  );
}

export default Home;
