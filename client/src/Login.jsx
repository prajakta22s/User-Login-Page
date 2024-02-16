import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // State to hold login message
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginMessage(""); // Reset login message on new submission
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if(res.data.status === "success"){
            // Set a success message or navigate based on role
            const message = "Login successful. Redirecting...";
            setLoginMessage(message);
            setTimeout(() => {
                if(res.data.role === "visitor"){
                    navigate('/home');
                }else{
                    navigate('/');
                }
            }, 2000); // Delay navigation to show the message
        } else {
            // Set a general error message if status is not success
            setLoginMessage("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        // Set an error message on login failure
        const errorMessage = err.response?.data?.message || "An error occurred. Please try again later.";
        setLoginMessage(errorMessage);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-3 rounded col-12 col-md-6 col-lg-4 shadow">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              className="form-control rounded-0"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              className="form-control rounded-0"
              name="password"
              autoComplete="off"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100 rounded-0 mt-3">Login</button>
          {/* Display login message if it exists */}
          {loginMessage && <div className="alert alert-info mt-2">{loginMessage}</div>}
          <p>Don't have an account?</p>
          <Link to={"/register"} className="btn btn-light w-100 rounded-0">Register</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
