import { useEffect, useMemo } from "react";
import "./DisplayDashboard.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchOrders } from "../../store/Actions/orderActions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DisplayDashboard() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.product) || [];
  const orders = useSelector((state) => state.order.order) || [];

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders());
  }, [dispatch]);

  // Calculate revenue
  const revenue = Array.isArray(orders)
    ? orders.reduce((acc, order) => acc + order.total, 0).toFixed(2)
    : 0;

  // Calculate total products
  const totalProducts = Array.isArray(products) ? products.length : 0;

  // Calculate total orders
  const totalOrders = Array.isArray(orders) ? orders.length : 0;

  // Aggregate revenue per month
  const monthlyRevenue = useMemo(() => {
    const revenueByMonth = {};

    orders.forEach((order) => {
      const month = new Date(order.order_date).toLocaleString("default", {
        month: "short",
      });
      if (!revenueByMonth[month]) {
        revenueByMonth[month] = 0;
      }
      revenueByMonth[month] += order.total;
    });

    return Object.keys(revenueByMonth).map((month) => ({
      name: month,
      earning: revenueByMonth[month].toFixed(2),
    }));
  }, [orders]);

  return (
    <div className="display-dashboard">
      <div className="display-dashboard-container">
        <div className="display-dashboard-content">
          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-shoe-prints"></i>
              <h3>Products</h3>
            </div>
            <p>{totalProducts}</p>
          </div>

          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-shopping-cart"></i>
              <h3>Orders</h3>
            </div>
            <p>{totalOrders}</p>
          </div>
          <div className="display-dashboard-content-item">
            <div className="display-dashboard-content-item-header">
              <i className="fa-solid fa-dollar-sign"></i>
              <h3>Revenue</h3>
            </div>
            <p>{revenue}</p>
          </div>
        </div>

        {/* Add the chart below */}
        <div className="display-dashboard-chart">
          <h2>Earning Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={monthlyRevenue}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="earning"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DisplayDashboard;
