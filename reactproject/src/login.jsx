import React from "react";

function Login() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }} // This makes the container take the full height of the viewport
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        {" "}
        <h2 className="mb-4 text-center">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-secondary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
