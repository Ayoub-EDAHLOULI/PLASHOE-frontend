import "./TabProduct.scss";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { deleteProduct } from "../../store/Actions/productActions";
import Swal from "sweetalert2";

function TabProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  //Fetch Products and Categories
  useMemo(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  //Handle Add Product
  const handleAddProduct = () => {
    navigate("/dashboard?tab=add-product");
  };

  //Handle Pagination
  const handlePreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //Hnadle Edit Product
  const handleEditProduct = (id) => {
    navigate(`/dashboard?tab=edit-product&id=${id}`);
  };

  //Handle Delete Product
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        //dispatch an action to delete the product
        dispatch(deleteProduct(id))
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            dispatch(fetchProducts());
          })
          .catch((error) => {
            Swal.fire("Error!", error, "error");
          });
      }
    });
  };

  //Special characters for the search input
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&'’\\");
  };

  //Filter Products
  const filteredProducts = products.filter((product) => {
    const matchesQuery = product.name
      .toLowerCase()
      .includes(escapeRegExp(query.toLowerCase()));
    const matchesCategory =
      selectedCategory === "all"
        ? true
        : product.categoryId === Number(selectedCategory);
    return matchesQuery && matchesCategory;
  });

  //Get Total Pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
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
              <input
                type="search"
                placeholder="Search Item..."
                value={query}
                onChange={(e) => setQuery(e.target.value) && setCurrentPage(1)}
              />
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
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="all">All Products</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
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
                      <button onClick={() => handleEditProduct(product.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteProduct(product.id)}>
                        Delete
                      </button>
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
