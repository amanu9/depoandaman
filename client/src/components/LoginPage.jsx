import React, { useEffect, useRef, useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function loginValidation(values) {
    let error = {};
    if (values.username == "") {
      error.username = "username should not be empty ";
    } else if (values.password == "") {
      error.password = "password can not be empty";
      console.error();
    } else {
      return error;
    }
  }

  const handleLogin = async (event) => {
    event.preventDefault();

    const validationErrors = loginValidation({ username, password });
    if (Object.keys(validationErrors).length > 0) {
      // Handle validation errors
      return;
    }

    Axios.post(`http://localhost:3001/login`, {
      username: username,
      password: password,
    })
      .then((res) => {
        if (res.data.token != null && res.data.role == 1) {
          console.log("the value of data is ", res);
          navigate("/dashboard");
        } else if (res.data.token != null && res.data.role == 0) {
          navigate("/userdashboard");
        } else {
          console.log("the value of data is ", res.data);

          alert("Error Occured");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div class="flex items-center justify-center h-screen">
      {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
      <div class=" p-4 rounded-lg shadow-lg max-w-sm w-full">
        <div class="flex justify-center mb-2">
          <img class="inline-block h-12 w-12 rounded-full ring-2 ring-wheat" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4">Login</h2>
        <p class="text-gray-600 text-center mb-6">Welcome to Cine Hub</p>

        <form className="py-1">
          <div class="mb-2">
            <input
              type="email"
              class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 "
              required
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="mb-2">
            <input
              type="password"
              class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 "
              required
              placeholder="Enter password"
              password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg  focus:outline-none"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <Link to="/register">
          <div className="flex justify-between">
            <p>Already have an account ?</p> 
            <button className="btn bg-primary text-light font-bold">SignUp</button>
          </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
