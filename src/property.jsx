function User({ name, age, email }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Email: {email}</h4>
    </div>
  );
}

// 🔹 Default props set kar rahe hain
User.defaultProps = {
  name: "Guest User",
  age: "Not Specified",
  email: "No Email Provided",
};

export default User;
