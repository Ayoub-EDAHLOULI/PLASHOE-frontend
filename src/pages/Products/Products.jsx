import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector to get products and categories from the state
  const products = useSelector((state) => state.product.product) || [];
  const categories = useSelector((state) => state.category.categories) || [];

  //Local State to manage loading
  const [loading, setLoading] = useState(false);

  // Get Category Name
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__container__title">
          <h1>Products</h1>
        </div>
        <div className="products__container__content__items">
          {loading ? (
            <h1>Loading...</h1>
          ) : products.length > 0 ? (
            products.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product-link"
              >
                <div className="content__item" key={product.id}>
                  <img src={product.image} alt="" />
                  <div className="item_infos">
                    <div className="item_info">
                      <div className="des">
                        <span>{getCategoryName(product.categoryId)}</span>
                        <h5>{product.name}</h5>
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <h4>${product.price}</h4>
                      </div>
                      <a href="" className="cart">
                        <i className="fa-solid fa-bag-shopping"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1>No Products</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
