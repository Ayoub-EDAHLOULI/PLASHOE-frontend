import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/Actions/authActions";
import { useEffect } from "react";

function Login() {
  // Redux Logic
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // React Router Navigate
  const navigate = useNavigate();

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // Validation Schema with Yup
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    // Schema for form submission
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));

      // Reset form after submission
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (auth.error) {
      alert(auth.error);
    } else if (auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth, navigate]);

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="labelError">
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="labelError">
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Link to="/forgot-password"> Forgot your password? </Link>
          <button type="submit">Login</button>
          <Link to="/register"> Create a new account </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
