import React from "react";

export function LiveCounter({ lives }) {
  return (
    <>
      <div>
        <h3>{lives > 0 ? "Lives: " + "❤️".repeat(lives) : "Game Over"}</h3>
      </div>
    </>
  );
}
