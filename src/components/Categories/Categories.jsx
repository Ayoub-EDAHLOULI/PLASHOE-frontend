import "./Categories.scss";

function Categories() {
  return (
    <div className="categories">
      <div className="categories_container">
        <div className="category_top_side">
          <div className="category_title">
            <h2>Categories</h2>
          </div>
          <div className="all_products">
            <a href="/products">All Products</a>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="category_bottom_side">
          <div className="card_one">
            <div className="card_one_title">
              <h3>Man</h3>
            </div>
          </div>
          <div className="card_two">
            <div className="card_one_title">
              <h3>Woman</h3>
            </div>
          </div>
          <div className="card_three">
            <div className="card_one_title">
              <h3>Kids</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
