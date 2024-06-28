import "./DisplayProduct.scss";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/Actions/productActions";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { useEffect, useState } from "react";

function DisplayProduct() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product) || [];
  const categories = useSelector((state) => state.category.categories) || [];

  //Local State to manage loading
  const [loading, setLoading] = useState(false);

  // Get Category Name
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = () => {
      setLoading(true);
      try {
        dispatch(fetchProduct(productId));
        dispatch(fetchCategories());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [dispatch, productId]);

  return (
    <div className="products">
      <div className="products__container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="product__content" key={product.id}>
            <div className="product__image">
              <img src={product.image} alt="Product1" />
            </div>
            <div className="product__info">
              <div className="product__tags">
                <span>{getCategoryName(product.categoryId)}</span>
              </div>
              <h2 className="product__name">{product.name}</h2>
              <div className="product__price__rate">
                <span className="product__price">${product.price}</span>
                <div className="product__rate">
                  <span className="product__rate">4.5</span>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="product__quantity">
                <span className="quantity__title">Quantity:</span>
                <div className="quantity__buttons">
                  <button className="quantity__btn">-</button>
                  <span className="quantity__number">1</span>
                  <button className="quantity__btn">+</button>
                </div>
              </div>
              <div className="in__stock">In Stock</div>
              <div className="cards__buttons">
                <button>Add to Cart</button>
                <button>Buy Now</button>
              </div>
              <div className="product__shipping">
                <div className="top__shipping">
                  <i className="fa-solid fa-truck-fast"></i>
                  <span>Fast Shipping</span>
                </div>
                <div className="bottom__shipping">
                  <span>
                    Place your order before 12:00pm and receive it by tomorrow
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <ProductDescription description={product.description} />
      </div>
    </div>
  );
}

export default DisplayProduct;
