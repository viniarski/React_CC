import Counter from "./Counter";
import { useState, useEffect } from "react";

export default function Game() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <>
      <Counter count={count} setCount={setCount} />
    </>
  );
}