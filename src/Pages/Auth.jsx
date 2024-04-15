import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerAPI, loginAPI } from "../Services/allAPI";
import Swal from "sweetalert2";

function Auth({ register }) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!userData.username || !userData.email || !userData.password) {
      Swal.fire({
        title: "Error",
        text: "Please complete the details!",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      // api call to register
      const result = await registerAPI(userData);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          title: "Successful!",
          text: "Successfully Registered!!",
          icon: "success",
          confirmButtonText: "Yes",
        }).then(() => {
          setUserData({ username: "", email: "", password: "" });
          // Navigate to login page
          window.location.href = "/login";
        });
      } else if (result.response.status === 406) {
        Swal.fire({
          title: "Login Failed",
          text: "Ooops! Please enter a new mail!",
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    }
    console.log(userData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      Swal.fire({
        title: "Error",
        text: "Please complete the details!",
        icon: "warning",
        confirmButtonText: "Back",
      });
    } else {
      // api call to register
      const result = await loginAPI(userData);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem("username",result.data.existingUser.username)
        sessionStorage.setItem("token",result.data.token)
        Swal.fire({
          title: "Successful!",
          text: "Login Successful! !!",
          icon: "success",
          confirmButtonText: "Yes",
        }).then(() => {
          setUserData({email: "", password: "" });
          // Navigate to login page
          window.location.href = "/";
        });
      } else if (result.response.status === 404) {
        Swal.fire({
          title: "Login Failed",
          text: "Ooops! please fill the form correctly!",
          icon: "error",
          confirmButtonText: "Back",
        });
      }
    }
    console.log(userData);
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
              width={"60%"}
              className="p-4 mt-5"
              style={{ marginLeft: "20px" }}
              alt=""
            />
          </div>

          <div className="col-lg-6">
            <form
              className="shadow bg-tertiary"
              style={{ marginRight: "30px" }}
            >
              <h1 className="text-center mt-5">PROJECT FAIR</h1>
              <h5 className="text-center">
                {register ? "Register Here" : "Login Here"}
              </h5>

              <div className="p-5">
                {register && (
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                    value={userData.username}
                    type="text"
                    placeholder="Username"
                    className="form-control mb-2"
                  />
                )}
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  value={userData.email}
                  type="email"
                  placeholder="Email"
                  className="form-control mb-2"
                />
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  value={userData.password}
                  type="password"
                  placeholder="Password"
                  className="form-control mb-2"
                />
              </div>
              <div>
                {register ? (
                  <div className="text-center">
                    <button onClick={handleRegister} className="btn mb-5">
                      Register
                    </button>
                    <p>
                      Already Registered?
                      <Link to={"/login"}>Login Here</Link>
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <button onClick={handleLogin} className="btn mb-5">Login</button>
                    <p>
                      New to Here?
                      <Link to={"/register"}>Register</Link>
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
