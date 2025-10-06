import Button from "./Card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Change Style with Props 🎨</h1>

      {/* Passing different colors as props */}
      <Button label="Primary" color="blue" />
      <Button label="Success" color="green" />
      <Button label="Danger" color="red" />
    </div>
  );
}

export default App;
