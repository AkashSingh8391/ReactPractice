import User from "./property";

function App() {
  // ek object banate hain
  const user = {
    name: "Akash Singh",
    age: 23,
    email: "akash@gmail.com",
  };

  return (
    <div>
      <h1>Passing Object as Props</h1>
      {/* Passing entire object */}
      <User data={user} />
    </div>
  );
}

export default App;
