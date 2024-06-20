import "./Register.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/Actions/authActions";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { ToastContext } from "../../../context/ToastContext";

function Register() {
  // Redux Logic
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
      console.log("values", values);
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!formik.isValid) {
      return addToast("Please fill out the form correctly", "error");
    }

    // Dispatch register action
    dispatch(
      register(formik.values.name, formik.values.email, formik.values.password)
    );

    // Reset form after submission
    formik.resetForm();
  };

  return (
    <div className="register">
      <div className="register_container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
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
        {
          // Display error message if there is an error
          auth.error && addToast(auth.error, "error")
        }
        {
          // Display success message if registration is successful
          auth.isAuthenticated && addToast("Registration successful", "success")
        }
        {
          // Display loading message if registration is in progress
          auth.loading && addToast("Loading...", "info")
        }
      </div>
    </div>
  );
}

export default Register;
