import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperClick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    // console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleOnchange = (event) => {
    // console.log("On Clicked");
    setText(event.target.value);
  };
  const check = (text) => {
    if (text.trim() === "") {
      return 0; // If text is empty or contains only spaces, return 0 words.
    } else {
      return text.trim().split(/\s+/).length; // Count the words by splitting on spaces.
    }
  };

  const time = (text) => {
    if (text === "") {
      return 0.0;
    } else {
      return 0.008 * text.split(" ").length;
    }
  };
  const [text, setText] = useState("");
  // text = "new Text"; //Wrong way
  // setText('new Text'); // corect way
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="mybox"
            rows="8"
            placeholder="Enter Your Text Here"
          ></textarea>

          <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
            Convert to UpperCase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
            Convert to LowerCase
          </button>

          <button className="btn btn-danger" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <p>
          <b>{check(text)}</b> words and <b>{text.length}</b> characters.
        </p>

        <p>
          To read the given text, the average time required is: 
          <b>{time(text)}</b> minutes.
        </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
