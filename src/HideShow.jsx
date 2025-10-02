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


export function Example({ score }) {
  let message;
  if (score >= 90) {
    message = "Grade A";
  } else if (score >= 75) {
    message = "Grade B";
  } else if (score >= 50) {
    message = "Grade C";
  } else {
    message = "Fail";
  }

  return <h2>{message}</h2>;
}
