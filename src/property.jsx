function User(props) {
  return (
    <div style={{ border: "2px solid gray", padding: "10px", marginTop: "10px" }}>
      <h2>User Information</h2>
      <p><b>Name:</b> {props.data.name}</p>
      <p><b>Age:</b> {props.data.age}</p>
      <p><b>Email:</b> {props.data.email}</p>
    </div>
  );
}

export default User;
