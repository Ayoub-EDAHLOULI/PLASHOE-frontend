import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <Link to="/forgot-password"> Forgot your password? </Link>
          <button type="submit">Login</button>
          <Link to="/register"> Create a new account </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
