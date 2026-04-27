import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "20px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "light" : "Dark"} mode
      </button>
      <p>You are in {dark ? "Dark" : "Light"} mode</p>
    </div>
  );
}
