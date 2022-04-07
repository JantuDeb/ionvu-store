import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext";

const LogIn = () => {
  const [user, setUser] = useState({ email: "ionvu@store.com", password: "1234567" });
  const { email, password } = user;

  const { logIn } = useAuth();
  function inputChangeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    logIn(user);
  }

  return (
    <main className="signup-main flex center">
      <form
        className="login-container radius-md shadow-gray p-4"
        onSubmit={submit}
      >
        <div className="input-group">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input p-2 "
            name="email"
            placeholder="Email address"
            value={email}
            onChange={inputChangeHandler}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input p-2 "
            name="password"
            placeholder="Password"
            value={password}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="flex my-4 justify-between ">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="input-checkbox"
              name="remember"
            />
            <label htmlFor="remember" className="mx-2">
              Remember me
            </label>
          </div>
          <Link to="/reset-password" className="btn-link">
            Forgot Password
          </Link>
        </div>
        <button className="btn-grad-red radius-md btn-login my-2" type="submit">
          Login
        </button>
        <div className="flex justify-center">
          <span>Not registered yet? </span>
          <Link to="/signup" className="btn-link px-1">
            {" "}
            Create an account
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LogIn;
