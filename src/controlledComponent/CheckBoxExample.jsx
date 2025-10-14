import { useState } from "react";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Checkbox is ${isChecked ? "checked" : "unchecked"}`);
  };

  const handleReset = () => {
    setIsChecked(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Checkbox Example</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Accept Terms & Conditions
        </label>

        <br /><br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </form>

      <p>Live Status: {isChecked ? "✅ Checked" : "❌ Not Checked"}</p>
    </div>
  );
}

export default CheckboxExample;
