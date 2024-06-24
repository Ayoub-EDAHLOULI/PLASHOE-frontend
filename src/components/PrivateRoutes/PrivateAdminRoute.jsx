import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateAdminRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (user && user.role === "ADMIN") {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
