import { useState } from "react";
import { useAuth } from "../context/auth/AuthContext";

const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const { name, email, password } = user;

  const { signUp } = useAuth();
  function inputChangeHandler(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();
    signUp(user);
  }

  return (
    <main className="signup-main flex center">
      <form
        className="signup-container radius-md shadow-gray py-4"
        onSubmit={submit}
      >
        <div className="input-group mx-4">
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

        <div className="input-group m-4">
          <label htmlFor="name" className="label">
            Full name
          </label>
          <input
            type="text"
            id="name"
            className="input p-2 "
            name="name"
            placeholder="Full name"
            value={name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="flex justify-between m-4">
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
          <span className="m-1"></span>
          <div className="input-group">
            <label htmlFor="confirm-password" className="label">
              Confirm password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="input p-2 "
              name="confirm-password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="text-red mx-4">
          {password !== confirmPassword &&
            "Password and confirm password must be same"}
        </div>
        <div className="flex mx-4 my-2 items-center">
          <label htmlFor="terms-and-conditions">
            I agree to the{" "}
            <a href="/signup" className="btn-link">
              terms and conditions
            </a>
          </label>
          <input
            type="checkbox"
            className="input-checkbox"
            name="terms-and-conditions"
          />
        </div>
        <button
          className={`mx-4 radius-md ${
            password === confirmPassword ? "btn-grad-red" : "disable"
          }`}
          type="submit"
          disabled={password !== confirmPassword}
        >
          Regester new account
        </button>
      </form>
    </main>
  );
};

export default SignUp;
