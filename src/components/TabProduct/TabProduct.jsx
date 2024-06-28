import "./TabProduct.scss";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchCategories } from "../../store/Actions/categoryAction";

function TabProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  //useNavigate to navigate to a different route
  const navigate = useNavigate();

  //useDispatch to dispatch an action
  const dispatch = useDispatch();

  // useSelector to get products and categories from the state
  const products = useSelector((state) => state.product.product) || [];
  const categories = useSelector((state) => state.category.categories) || [];

  // Get Category Name
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  useMemo(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  //Handle Add Product
  const handleAddProduct = () => {
    navigate("/dashboard?tab=add-product");
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="tab-products">
      <div className="tab-products-header">
        <h2>List of Items</h2>
      </div>
      <div className="tab-products-content">
        <div className="tab-products-top">
          <div className="search">
            <div className="searchInput">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="search" placeholder="Search Item..." />
            </div>
          </div>
          <div className="tab-products-filter">
            <select>
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>
          </div>
          <div className="tab-products-sort">
            <select>
              <option value="default">All Products</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kid">Kids</option>
            </select>
          </div>
          <div className="add-product-button">
            <button onClick={handleAddProduct}>+ Add Product</button>
          </div>
        </div>

        <div className="tab-products-table">
          <table>
            <thead>
              <tr className="tab-products-table-header">
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <tr className="tab-products-table-body" key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.stock}</td>
                    <td>{getCategoryName(product.categoryId)}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No Products Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "disable" : ""}
          >
            &laquo;
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "disable" : ""}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  );
}

export default TabProduct;
