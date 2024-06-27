import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../../store/Actions/authActions";
import { checkAuthentication } from "../../../store/Actions/userActions";
import { ToastContext } from "../../../context/ToastContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";

function Login() {
  // Redux Logic
  const dispatch = useDispatch();

  // Toast Context
  const { addToast } = useContext(ToastContext);

  // React Router Navigate
  const navigate = useNavigate();

  //Set toast duration in milliseconds
  const toastDuration = 2000;

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
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password))
        .then((response) => {
          addToast(response, "success");
          dispatch(checkAuthentication());
          setTimeout(() => {
            navigate("/");
          }, toastDuration);
        })
        .catch((error) => {
          addToast(error, "error");
        });

      // Reset form after submission
      formik.resetForm();
    },
  });

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

        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
