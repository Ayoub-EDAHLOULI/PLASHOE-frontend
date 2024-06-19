import "./Login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
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
      console.log("values", values);
    },
  });

  console.log("formik errors", formik.errors);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
