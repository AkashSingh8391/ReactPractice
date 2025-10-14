function Button({ label, propscolor }) {
  return (
    <button
      style={{
        backgroundColor: propscolor,
        color: "white",
        padding: "10px 20px", 
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

export default Button;
