import React from "react";

export default function App() {
  function handleClick() {
    console.log("I was clicked");
  }
  function handleOnMouseOver() {
    console.log("Mouse Over");
  }
  return (
    <div className="container">
      <img
        src="https://picsum.photos/640/360"
        alt=""
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
