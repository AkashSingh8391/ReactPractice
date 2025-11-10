import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("#007bff");

  // ⏰ Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 🎨 Function to change color randomly
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: color, fontSize: "50px", transition: "color 0.5s" }}>
        {time.toLocaleTimeString()}
      </h1>
      <button
        onClick={changeColor}
        style={{
          padding: "10px 20px",
          borderRadius: "10px",
          backgroundColor: color,
          border: "none",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          marginTop: "20px",
          transition: "background-color 0.5s",
        }}
      >
        Change Color
      </button>
    </div>
  );
}

export default Clock;
