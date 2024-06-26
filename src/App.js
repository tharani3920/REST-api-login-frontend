import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MouseClick from "./component/MouseClick";
import EcommerceSite from "./component/EcommerceSite";
import PrivateRoute from "./component/PrivateRoute";
import Signup from "./component/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  useEffect(() => {
    // Initialize login state from local storage
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/ecommerce"
          element={
            <PrivateRoute>
              <EcommerceSite />
            </PrivateRoute>
          }
        />
        <Route
          path="/"
          element={<MouseClick setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
