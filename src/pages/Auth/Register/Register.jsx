import { Link } from "react-router-dom";
import "./Register.scss";

function Login() {
  return (
    <div className="register">
      <div className="register_container">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Create account</button>
          <Link to="/login"> Already have an account? </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
