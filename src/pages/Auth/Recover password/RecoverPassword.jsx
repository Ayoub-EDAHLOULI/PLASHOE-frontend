import "./RecoverPassword.scss";
import { Link } from "react-router-dom";

function RecoverPassword() {
  return (
    <div className="recoverPassword">
      <div className="recoverPassword_container">
        <h1>Recover Password</h1>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Recover password</button>
          <Link to="/login" className="remember_password">
            Remembered your password?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default RecoverPassword;
