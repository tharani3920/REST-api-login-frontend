// import React, { useState, useRef } from "react";
// import ParticleBack from "./ParticleBack";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./ParticlesBackground.css";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState(""); // State to track the error message
//   const navigate = useNavigate();
//   const usernameInputRef = useRef(null);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous error messages

//     try {
//       // Replace with your actual API endpoint for signup
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Signup successful", data);
//         toast.success("Signup successful! Please login."); // Show success toast notification
//         setTimeout(() => {
//           navigate("/"); // Redirect to login page after 2 seconds
//         }, 3000);
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message); // Set the error message
//       }
//     } catch (error) {
//       setError("An error occurred during signup"); // Set the error message for any other errors
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//     <>
//       <ParticleBack />
//       <div className="mouse-click-container">
//         <div className="login-page">
//           <h2>Sign Up</h2>
//           <form onSubmit={handleSignup}>
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
//               <div className="password-input-container">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   className="toggle-password-icon"
//                   onClick={togglePasswordVisibility}
//                   onMouseDown={(e) => e.preventDefault()} // Prevent focus loss on click
//                 >
//                   {passwordVisible ? <FaEye /> : <FaEyeSlash />}
//                 </span>
//               </div>
//             </div>
//             {error && <div className="error-message">{error}</div>}
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//       <ToastContainer position="top-center" autoClose={3000} closeOnClick />
//     </>
//   );
// };

// export default Signup;

import React, { useState, useRef } from "react";
import ParticleBack from "./ParticleBack";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ParticlesBackground.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(""); // State to track the error message
  const navigate = useNavigate();
  const usernameInputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful", data);
        toast.success("Signup successful! Please login."); // Show success toast notification
        setTimeout(() => {
          navigate("/"); // Redirect to login page after 2 seconds
        }, 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.message); // Set the error message
      }
    } catch (error) {
      setError("An error occurred during signup"); // Set the error message for any other errors
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <ParticleBack />
      <div className="mouse-click-container">
        <div className="login-page">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
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
                Already have an account? <a href="/">Login</a>
              </p>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} closeOnClick />
    </>
  );
};

export default Signup;
