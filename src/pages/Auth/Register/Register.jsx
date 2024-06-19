import "./Register.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
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

  console.log("formik errors", formik.errors);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
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
      </div>
    </div>
  );
}

export default Register;
