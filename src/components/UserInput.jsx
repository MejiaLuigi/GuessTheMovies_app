import React, { useState } from "react";
import "../assets/style/style.css";

export function UserInput({ checkAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleAnswer = (event) => {
    event.preventDefault();
    checkAnswer(answer);
    console.log(answer);
    setAnswer("");
  };

  return (
    <form className="formInput" onSubmit={handleAnswer}>
      <input
        className="userInput"
        type="text"
        placeholder="Enter Title"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button className="buttonInput" type="submit">¡Guess!</button>
    </form>
  );
}
