import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // React state update ho rahi hai
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your name is: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name: </label>
      <input
        type="text"
        value={name}           // Input ka value state se control ho raha hai
        onChange={handleChange} // User ke type karte hi state update hoti hai
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledInput;
