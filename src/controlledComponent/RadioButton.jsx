import { useState } from "react";

function RadioButtonExample() {
  const [gender, setGender] = useState("male");
  const [country, setCountry] = useState("India");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Radio + Dropdown Controlled Example</h2>

      {/* Radio Section */}
      <h4>Select Gender:</h4>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>
      <label style={{ marginLeft: "10px" }}>
        <input
          type="radio"
          name="gender"
          value="other"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>

      {/* Dropdown Section */}
      <h4 style={{ marginTop: "20px" }}>Select Country:</h4>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>

      {/* Display Section */}
      <h3 style={{ marginTop: "20px" }}>Live Values:</h3>
      <p>Gender: {gender}</p>
      <p>Country: {country}</p>
    </div>
  );
}

export default RadioButtonExample;
