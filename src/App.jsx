import User from "./property";

function App() {
  return (
    <div style={ { backgroundcolor:"light-blue" ,color: "orange",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",}}>
      <h1>Default Props Example</h1>

      {/* Props diye hue */}
      <User name="Akash Singh" age={23} email="akash@gmail.com" />

      {/* Props nahi diye hue → Default props use honge */}
      <User />
    </div>
  );
}

export default App;
