import React from "react";
import monsterImg from "./assets/cookie_monster.png";
import './Monster.css'

export default function ResetButton({ resetCount, resetUpgrades}) {

  const handleReset = () => {
    resetCount(0);
    resetUpgrades(0);
  }

  return (
    <img
      src={monsterImg}
      alt="Monster"
      className="monster"
      onClick={handleReset}
    />
  );
}