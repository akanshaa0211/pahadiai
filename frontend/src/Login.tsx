function Login() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          margin: "10px",
          width: "250px",
        }}
      />

      <br />

      <button
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;