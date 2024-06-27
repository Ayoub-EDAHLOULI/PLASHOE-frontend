import "./Dashboard.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../store/Actions/authActions";
import TabProducts from "../../components/TabProduct/TabProduct";
import AddProduct from "../../components/AddProduct/AddProduct";
import TabCategory from "../../components/TabCategory/TabCategory";
import UpdateCategory from "../../components/Update/UpdateCetegory/UpdateCategory";

function Dashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  // Redirect to home page if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleNavigation = (tab) => {
    navigate(`/dashboard?tab=${tab}`);
  };

  return (
    <section className="dashboard">
      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <div className="dashboard-sidebar-header">
            <h2>Dashboard</h2>
            <div className="dashboard-sidebar-header-line"></div>
          </div>

          <div className="dashboard-sidebar-items">
            {/* Dashboard */}
            <div
              className={`dashboard-sidebar-item ${
                location.search.includes("tab=dashboard") ? "active" : ""
              }`}
              onClick={() => handleNavigation("dashboard")}
            >
              <i className="fa-solid fa-table-columns"></i>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </div>

            {/* Account Page */}
            <h4 className="account-pages">Account Pages</h4>

            {/* Profile */}
            <div
              className={`dashboard-sidebar-item ${
                location.search.includes("tab=profile") ? "active" : ""
              }`}
              onClick={() => handleNavigation("profile")}
            >
              <div className="items">
                <i className="fas fa-user"></i>
                <NavLink to="/dashboard/profile ">Profile</NavLink>
              </div>
            </div>

            {/* Products */}
            <div
              className={`dashboard-sidebar-item ${
                location.search.includes("tab=Products") ? "active" : ""
              }`}
              onClick={() => handleNavigation("Products")}
            >
              <div className="items">
                <i className="fa-solid fa-dumpster-fire"></i>
                <NavLink to="/dashboard/Products ">Products</NavLink>
              </div>
            </div>

            {/* Categories */}
            <div
              className={`dashboard-sidebar-item ${
                location.search.includes("tab=add-category") ? "active" : ""
              }`}
              onClick={() => handleNavigation("add-category")}
            >
              <div className="items">
                <i className="fa-solid fa-dumpster"></i>
                <NavLink to="/dashboard/add-category">Categories</NavLink>
              </div>
            </div>

            <div className="dashboard-sidebar-item">
              <div className="items">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <NavLink
                  to="/"
                  onClick={() => {
                    dispatch(logout());
                  }}
                >
                  Sign Out
                </NavLink>
              </div>
            </div>
          </div>
        </aside>

        <main className="dashboard-main">
          {
            // Dashboard content
            location.search.includes("tab=dashboard") && (
              <div className="dashboard-main-dashboard">
                <h2>Dashboard</h2>
                <p>Welcome to the dashboard</p>
              </div>
            )
          }

          {
            // Profile content
            location.search.includes("tab=profile") && (
              <div className="dashboard-main-profile">
                <div className="profile-image"></div>
                <div className="profile-content">
                  <h2>Profile</h2>
                </div>
              </div>
            )
          }

          {
            // Articles content
            location.search.includes("tab=Products") && (
              <div className="dashboard-main-products">
                <TabProducts />
              </div>
            )
          }

          {
            // Add product content
            location.search.includes("tab=add-product") && (
              <div className="dashboard-main-add-product">
                <AddProduct />
              </div>
            )
          }

          {
            // Add category content
            location.search.includes("tab=add-category") && (
              <div className="dashboard-main-add-category">
                <TabCategory />
              </div>
            )
          }

          {
            // Update category content
            location.search.includes("tab=edit-category") && (
              <div className="dashboard-main-update-category">
                <UpdateCategory />
              </div>
            )
          }
        </main>
      </div>
    </section>
  );
}

export default Dashboard;
