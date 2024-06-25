import "./AddProduct.scss";

function AddProduct() {
  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" name="product-name" className="input-strings" />
        </div>
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea name="product-description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="product-price">Product Price</label>
          <input type="text" name="product-price" className="input-strings" />
        </div>
        <div className="form-group">
          <label htmlFor="product-quantity">Product Quantity</label>
          <input
            type="text"
            name="product-quantity"
            className="input-strings"
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-image">Product Image</label>
          <input type="file" name="product-image" className="input-image" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
