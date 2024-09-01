import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text area is now empty!", "danger");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const check = (text) => {
    return text.split(/\s+/).filter((element) => element.length !== 0).length;
  };

  const time = (text) => {
    if (text === "") {
      return 0.0;
    } else {
      return 0.008 * text.split(/\s+/).length;
    }
  };

  const handleCopy = () => {
    var textArea = document.getElementById("mybox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
    props.showAlert("Text Copied Successfully!", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are Removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.textcolor,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            placeholder="Enter Your Text Here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#212529",
              color: props.textcolor,
            }}
          ></textarea>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-1"
            onClick={handleUpperClick}
          >
            Convert to UpperCase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-3 my-1"
            onClick={handleLowerClick}
          >
            Convert to LowerCase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-success mx-3 my-1"
            onClick={handleExtraSpace}
          >
            Remove Extra Space
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-success mx-4 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-danger mx-1 my-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
        </div>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.textcolor,
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b>{check(text)}</b> words and <b>{text.length}</b> characters.
        </p>
        <p>
          To read the given text, the average time required is:{" "}
          <b>{time(text)}</b> minutes.
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Something In Above Text Box To Preview Text."}
        </p>
      </div>
      <hr />
    </>
  );
}
