import { useState } from "react";

function ControlledForm() {
  // Step 1️⃣: State create karo for each input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // Step 2️⃣: Handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // dynamically update based on input name
    });
  };

  // Step 3️⃣: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Form Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Age:{" "}
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h3>Live Preview:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </div>
  );
}

export default ControlledForm;
