import React from "react";
import { useState } from "react";
import './Cookie.css';
import cookieImg from "./assets/cookie.png";

export default function Cookie({ setCount, count }) {
  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <img
      src={cookieImg}
      alt="Cookie"
      className="image cookie"
      onClick={incrementCounter}
    />
  );
}