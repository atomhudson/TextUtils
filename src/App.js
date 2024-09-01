import "./App.css";
import Aboutus from "./components/Aboutus";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-info");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-secondary");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);

    if (mode === "light") {
      setMode("dark");
      setTextColor("light");
      document.body.style.backgroundColor = "#212529";
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setTextColor("dark");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }

    // Adjust the text color dynamically based on the background class
    if (
      ["primary", "info", "success", "warning", "danger", "dark"].includes(cls)
    ) {
      setTextColor("light");
    } else {
      setTextColor("dark");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        textcolor={textColor}
      />
      <Alerts text={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <Aboutus
                mode={mode}
                toggleMode={toggleMode}
                textcolor={textColor}
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text To Analyze"
                mode={mode}
                textcolor={textColor}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
