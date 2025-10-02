import React, { useState } from "react";

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <input 
        type={showPassword ? "text" : "password"} 
        placeholder="Enter Password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordInput;
