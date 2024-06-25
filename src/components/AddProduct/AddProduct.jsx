import "./AddProduct.scss";
import { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [file, setFile] = useState(null);

  //Upload image to server and get the URL
  //Upload Image
  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      const res = await axios.post(
        "http://127.0.0.1:3000/api/v1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      quantity,
      image: await uploadImage(file),
    };

    console.log(product);
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            name="product-name"
            className="input-strings"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea
            name="product-description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="product-price">Product Price</label>
          <input
            type="text"
            name="product-price"
            className="input-strings"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-quantity">Product Quantity</label>
          <input
            type="text"
            name="product-quantity"
            className="input-strings"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="product-image">Product Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="input-image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={uploadImage}>Upload Image</button>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
