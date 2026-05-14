import { useState } from "react";

function useCount(initialvalue) {
  const [count, setCount] = useState(initialvalue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialvalue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
}
export default useCount;
