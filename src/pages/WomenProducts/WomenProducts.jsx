import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Actions/productActions";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { createCart } from "../../store/Actions/cartActions";
import { fetchCart } from "../../store/Actions/cartActions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function WomenProducts() {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector to get products and categories from the state
  const products = useSelector((state) => state.product.product) || [];
  const categories = useSelector((state) => state.category.categories) || [];

  // Filter men products
  const menProducts = Array.isArray(products)
    ? products.filter((product) => {
        return product.categoryId === 2;
      })
    : [];

  //Local State to manage loading
  const [loading, setLoading] = useState(false);

  //Current Page
  const [currentPage, setCurrentPage] = useState(1);

  //Products per page
  const productsPerPage = 12;

  // Handle Pagination
  const handlePreviousPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.max(prev - 1, 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return newPage;
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => {
      const newPage = Math.min(prev + 1, totalPages);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return newPage;
    });
  };

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

  const handleAddToCart = (id, event) => {
    event.preventDefault();

    // Add product to cart
    dispatch(createCart({ productId: id, quantity: 1 }))
      .then((response) => {
        console.log("Product added to cart:", response);
        dispatch(fetchCart());
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };

  // Total Pages
  const totalPages = Math.ceil(menProducts.length / productsPerPage);
  const currentProducts = Array.isArray(menProducts)
    ? menProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      )
    : [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__container__title">
          <h1>Products</h1>
        </div>
        <div className="products__container__content__items">
          {loading ? (
            <h1>Loading...</h1>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
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
                        <h4>${product.price.toFixed(2)}</h4>
                      </div>
                      <a
                        href=""
                        className="cart"
                        onClick={(e) => handleAddToCart(product.id, e)}
                      >
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

export default WomenProducts;
