import React, { useState } from "react";

function HideShow() {
  const [visible, setVisible] = useState(true); // state banayi

  return (
    <div>
      <button onClick={() => setVisible(false)}>Hide</button>
      <button onClick={() => setVisible(true)}>Show</button>

      {visible && <h2>Hello, I am visible!</h2>}
    </div>
  );
}

export default HideShow;
