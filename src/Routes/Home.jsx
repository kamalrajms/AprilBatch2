import React, { useState, useEffect } from "react";
import UseParamHook from "../Component/UseParamHook";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);

  const page = useNavigate();

  useEffect(() => {
    if (count >= 10) {
      page("/Contact");
    }
    console.log(count);
  }, [count]);

  return (
    <div>
      <h2>Home component</h2>
      <button onClick={() => page("/About")}>move to About</button>
      <button onClick={() => setCount(count + 1)}>
        Move to contact {count}
      </button>
      <UseParamHook />
    </div>
  );
}
