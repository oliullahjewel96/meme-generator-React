import React from "react";
import "../index.css";
import trollImage from "../images/Troll Face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollImage} className="header--image" alt="troll" />
      <h2 className="header--title"> Meme Generator </h2>{" "}
      <h4 className="header--project"> React Course - Project 3 </h4>{" "}
    </header>
  );
}
