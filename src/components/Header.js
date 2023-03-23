import React from "react";
import "../styles/header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h1>Attack On Titan <br/> Memory</h1>
      <div className="score">
        <p>Level {props.level}</p>
        <p>Score: {props.score}</p>
        <p>High Score: {props.highScore}</p>
      </div>
    </div>
  );
}
