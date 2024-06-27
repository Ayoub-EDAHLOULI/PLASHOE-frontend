import "./Register.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../../store/Actions/authActions";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ToastContext } from "../../../context/ToastContext";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

function Register() {
  // Redux Logic
  const dispatch = useDispatch();

  // Toast Context
  const { addToast } = useContext(ToastContext);

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    // Validation Schema with Yup
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name is too long")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),

    // Schema for form submission
    onSubmit: (values) => {
      dispatch(register(values.name, values.email, values.password))
        .then((response) => {
          addToast(response, "success");
        })
        .catch((error) => {
          addToast(error, "error");
        });

      // Reset form after submission
      formik.resetForm();
    },
  });

  return (
    <div className="register">
      <div className="register_container">
        <h1>Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="labelError">
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
          <button type="submit">Create account</button>
          <Link to="/login"> Already have an account? </Link>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Register;
