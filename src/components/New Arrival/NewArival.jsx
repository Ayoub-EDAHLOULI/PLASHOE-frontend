import "./NewArrival.scss";

function NewArival() {
  return (
    <div className="new_arrival">
      <div className="new_arrival_container">
        <div className="new_arrival_top_side">
          <div className="new_arrival_title">
            <h2>New Arrival</h2>
          </div>
          <div className="all_products">
            <a href="/products">All Products</a>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="new_arrival_bottom_side">
          <div className="card_one">
            <div className="card_one_title">
              <h3>Nike air jordan</h3>
            </div>
          </div>
          <div className="card_two">
            <div className="card_one_title">
              <h3>Nike air jordan</h3>
            </div>
          </div>
          <div className="card_three">
            <div className="card_one_title">
              <h3>Nike air jordan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArival;
