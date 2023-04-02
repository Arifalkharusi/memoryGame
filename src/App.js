import React, { useEffect, useRef, useState } from "react";
import Card from "./Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { initilizer } from "./store/CardSlice";

function App() {
  const firstCall = useRef(true);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cardSlice);
  const [firstRotation, setFirstRotation] = useState(180);

  function shuffleArray(arr) {
    arr.forEach((_, i) => {
      const j = Math.trunc(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    });
    return arr;
  }

  const board = [1, 2, 1, 5, 2, 3, 6, 4, 3, 4, 5, 6];

  useEffect(() => {
    if (firstCall.current) {
      dispatch(initilizer(shuffleArray(board)));
      setTimeout(() => {
        setFirstRotation(0);
      }, 2000);
    }

    return () => {
      firstCall.current = false;
    };
  });

  return (
    <div className="container">
      <h1>Memory Game</h1>
      <div className="App">
        {data.map((x, i) => (
          <Card
            item={x.item}
            rotation={firstRotation || x.rotation}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
