import { useState } from "react";
import ControlledForm from "./controlledComponent/ControlledForm";
import CheckboxExample from "./controlledComponent/CheckBoxExample";
import RadioButtonExample from "./controlledComponent/RadioButton";
import Clock from "./controlledComponent/Clock";

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
      <RadioButtonExample/>
      <Clock/>
    </form>

  );
}

export default ControlledInput;
