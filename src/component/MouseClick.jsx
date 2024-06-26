// import React, { useState, useEffect, useRef } from "react";
// import ParticleBack from "./ParticleBack";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./ParticlesBackground.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// const MouseClick = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState(""); // State to track the error message
//   const navigate = useNavigate();
//   const usernameInputRef = useRef(null);

//   useEffect(() => {
//     if (usernameInputRef.current) {
//       usernameInputRef.current.focus();
//     }
//   }, []);
//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous error messages

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Login successful", data);
//         setIsLoggedIn(true); // Set isLoggedIn to true on successful login
//         localStorage.setItem("isLoggedIn", "true"); // Store login state in local storage
//         setUsername(""); // Clear username state
//         setPassword(""); // Clear password state
//         toast.success("Login successful!"); // Show success toast notification
//         setTimeout(() => {
//           navigate("/ecommerce"); // Redirect to e-commerce page after 2 seconds
//         }, 3000);
//       } else {
//         setError("Invalid username or password"); // Set the error message
//       }
//     } catch (error) {
//       setError("An error occurred during login"); // Set the error message for any other errors
//       console.error("Error during login:", error);
//     }
//   };

//   return (
//     <>
//       <ParticleBack />
//       <div className="mouse-click-container">
//         <div className="login-page">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={username}
//                 ref={usernameInputRef}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 // placeholder="Enter your password"
//               />
//               <span
//                 className="toggle-password-icon"
//                 onClick={togglePasswordVisibility}
//                 onMouseDown={(e) => e.preventDefault()} // Prevent focus loss on click
//               >
//                 {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//               </span>
//             </div>
//             <div className="form-group">
//               <p className="signup-link">
//                 Don't have an account? <a href="/signup">Sign Up</a>
//               </p>
//             </div>
//             {error && <div className="error-message">{error}</div>}
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} closeOnClick />
//     </>
//   );
// };

// export default MouseClick;

import React, { useState, useEffect, useRef } from "react";
import ParticleBack from "./ParticleBack";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ParticlesBackground.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MouseClick = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(""); // State to track the error message
  const navigate = useNavigate();
  const usernameInputRef = useRef(null);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, []);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful", data);
        setIsLoggedIn(true); // Set isLoggedIn to true on successful login
        localStorage.setItem("isLoggedIn", "true"); // Store login state in local storage
        setUsername(""); // Clear username state
        setPassword(""); // Clear password state
        toast.success("Login successful!"); // Show success toast notification
        setTimeout(() => {
          navigate("/ecommerce"); // Redirect to e-commerce page after 2 seconds
        }, 3000);
      } else {
        setError("Invalid username or password"); // Set the error message
      }
    } catch (error) {
      setError("An error occurred during login"); // Set the error message for any other errors
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <ParticleBack />
      <div className="mouse-click-container">
        <div className="login-page">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                ref={usernameInputRef}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-password-icon"
                  onClick={togglePasswordVisibility}
                  onMouseDown={(e) => e.preventDefault()} // Prevent focus loss on click
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="form-group">
              <p className="signup-link">
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} closeOnClick />
    </>
  );
};

export default MouseClick;
