import { useEffect } from "react";
import "./DisplayDashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchOrders } from "../../store/Actions/orderActions";

function DisplayDashboard() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.product) || [];
  const orders = useSelector((state) => state.order.order) || [];

  //const revenue = orders.reduce((acc, order) => acc + order.total, 0);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());
  }, [dispatch]);

  console.log("Products", products);
  console.log("Orders", orders);
  //console.log("Revenue", revenue);

  return (
    <div className="display-dashboard">
      <div className="display-dashboard-container">
        <div className="display-dashboard-content">
          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-shoe-prints"></i>
              <h3>Products</h3>
            </div>
            <p>0</p>
          </div>

          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-shopping-cart"></i>
              <h3>Orders</h3>
            </div>
            <p>0</p>
          </div>
          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-dollar-sign"></i>
              <h3>Revenue</h3>
            </div>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayDashboard;
