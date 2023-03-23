import React from "react";
import "../styles/card.css";

function Cards(props) {
  return (
    <div className="container" onClick={(e) => props.handleClick(e)}>
      {props.pool.map((item, i) => {
        return (
          <div className="card" id={item.name} key={i}>
            <img src={item.photo} alt="" />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
