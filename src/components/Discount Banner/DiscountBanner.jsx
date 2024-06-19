import "./DiscountBanner.scss";

function DiscountBanner() {
  return (
    <div className="discount_banner">
      <div className="discount_banner_container">
        <h1>Get discount for membership</h1>
        <h5>
          Every new membership will get a 20% discount for the first purchase
        </h5>
        <button>Join Now</button>
      </div>
    </div>
  );
}

export default DiscountBanner;
