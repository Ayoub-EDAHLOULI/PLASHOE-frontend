import "./TabProduct.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TabProduct() {
  const [addProduct, setAddProduct] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = () => {
    setAddProduct(true);
    if (addProduct) {
      //Change Url to add product
      navigate("/dashboard?tab=add-product");
    }
  };

  useEffect(() => {
    handleAddProduct();
  }, []);

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
              <tr className="tab-products-table-body">
                <td>Product 1</td>
                <td>$100</td>
                <td>10</td>
                <td>Men</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              <tr className="tab-products-table-body">
                <td>Product 1</td>
                <td>$100</td>
                <td>10</td>
                <td>Men</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              <tr className="tab-products-table-body">
                <td>Product 1</td>
                <td>$100</td>
                <td>10</td>
                <td>Men</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>

              <tr className="tab-products-table-body">
                <td>Product 1</td>
                <td>$100</td>
                <td>10</td>
                <td>Men</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabProduct;
