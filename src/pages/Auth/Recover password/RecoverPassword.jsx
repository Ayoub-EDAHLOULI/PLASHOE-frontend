import "./RecoverPassword.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function RecoverPassword() {
  // Formik Logic
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    // Validation Schema with Yup
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),

    // Schema for form submission
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="recoverPassword">
      <div className="recoverPassword_container">
        <h1>Recover Password</h1>
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
