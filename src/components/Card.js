import React from "react";
import { photoArray, getRandomItems } from "./util/photos";

function Card(props) {
  return (
    <div style={{display: 'flex'}}>
      {props.pool.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.photo} alt="" />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
