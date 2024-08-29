import "./App.css";
import Aboutus from "./components/Aboutus";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [textcolor, settextcolor] = useState("dark");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      settextcolor("light");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#212529";
      document.title = "TextUtils - Dark Mode";
    } else {
      setmode("light");
      settextcolor("dark");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          textcolor={textcolor}
        />
        <Alerts text={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={ <Aboutus mode={mode} toggleMode={toggleMode} textcolor={textcolor} /> }
            />
            <Route exact path="/"
              element={ <TextForm showAlert={showAlert} heading="Enter the Text To Analyze" mode={mode} /> }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
