import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./add.css";
import axios from "axios";

const Add = () => {
  const users = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [userDetails, setUserDetails] = useState(users);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    // console.log(userDetails);
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log("Users:", userDetails); 
    await axios
      .post("http://localhost:8000/api/post", userDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <div className="addUser">
      <Link to="/" className="link">
        Back{" "}
      </Link>
      <h2 className="heading">Add New User</h2>
      <form className="formArea" onSubmit={formSubmit}>
        <div className="loginForm">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="firstName"
            name="firstName"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>

        <div className="loginForm">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="lastName"
            name="lastName"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>

        <div className="loginForm">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            className="email"
            autoComplete="off"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="loginForm">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            className="password"
            autoComplete="off"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="loginForm">
          <button type="submit" className="subButton">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
