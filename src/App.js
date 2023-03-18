import Header from "./components/Header";
import Card from "./components/Card";
import React, { useState } from "react";
import { photoArray, getRandomItems } from "./components/util/photos"

function App() {
  const [ level, setLevel ] = useState(1);
  const [ pool, setPool ] = useState(getRandomItems(photoArray, (level * 5)))
  return (
    <div>
      <Header />
      <Card level={level} pool={pool} />
    </div>
  );
}

export default App;
