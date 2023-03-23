import Header from "./components/Header";
import Cards from "./components/Cards";
import React, { useEffect, useState } from "react";
import { photoArray, getRandomItems } from "./components/util/photos";
import './styles/app.css'

function App() {
  const [level, setLevel] = useState(1);
  const [pool, setPool] = useState(getRandomItems(photoArray, level * 5));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [wasClicked, setWasClicked] = useState([]);

  useEffect(() => {
    if (score > highScore) setHighScore(score); 
    if (wasClicked.length === pool.length) {
      setLevel((prev) => prev + 1);
      setWasClicked([])
    }
  });
  
  useEffect(() => {
    setPool(getRandomItems(photoArray, level * 5));
  }, [ level ]);

  const handleClick = (e) => {
    const name = e.target.parentNode.id;
    if (wasClicked.includes(name)) {
      setWasClicked([]);
      setScore(0);
      setLevel(1);
    } else {
      setWasClicked(wasClicked.concat(name));
      setScore((score + 1));
    }
    reshuffle();
  }

  const reshuffle = () => {
    setPool(pool.sort((a,b) => 0.5 - Math.random()));
  }

  return (
    <div>
      <Header score={score} highScore={highScore} level={level}/>
      <Cards level={level} pool={pool} handleClick={handleClick} />
    </div>
  );
}

export default App;
