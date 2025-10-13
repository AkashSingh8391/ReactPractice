import { useState } from "react";
import ControlledInput from "./controlledComponent/ControlledInput";

function App() {
  // Step 1️⃣: State banana
  const [name, setName] = useState("");

  // Step 2️⃣: Function to handle input
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Get Input Field Value 🎯</h2>

      {/* Step 3️⃣: Input field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{ padding: "8px", borderRadius: "5px" }}
      />

      {/* Step 4️⃣: Display value */}
      <h3>Your Name: {name}</h3>

    <ControlledInput/>

    </div>
  );
}

export default App;
