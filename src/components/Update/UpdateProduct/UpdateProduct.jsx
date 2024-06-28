import "./UpdateProduct.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { fetchCategories } from "../../../store/Actions/categoryAction";
import { updateProduct } from "../../../store/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContext } from "../../../context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function UpdateProduct() {
  //State for the form
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  //Redux Dispacth and Selector
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories || []);

  //Toast Context
  const { addToast } = useContext(ToastContext);

  //Get the product id from the url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  console.log("Product Id", productId);

  //Fetch Categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
      addToast(error.message, "error");
    }
  };

  //Submit the form
  const handelSubmit = async (e) => {
    e.preventDefault();

    //Dispatch the create product action
    dispatch(
      updateProduct({
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        image: file ? await uploadImage(file) : null,
        categoryId: Number(categoryId),
        productId: Number(productId),
      })
    )
      .then((response) => {
        addToast(response, "success");
        dispatch(fetchCategories());

        //Reset the form
        setName("");
        setDescription("");
        setPrice("");
        setStock("");
        setFile(null);
        setCategoryId("");

        //Empty the input fields
        document
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        document.querySelector("textarea").value = "";
        document.querySelector("select").value = "";
      })
      .catch((error) => {
        addToast(error, "error");
      });
  };

  return (
    <div className="update-product">
      <div className="top_side">
        <h2>Edit Product</h2>
      </div>
      <form onSubmit={handelSubmit}>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="product-name">Edit Product Name</label>
          <input
            type="text"
            name="product-name"
            className="input-strings"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product Description */}
        <div className="form-group">
          <label htmlFor="product-description">Edit Product Description</label>
          <textarea
            name="product-description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></textarea>
        </div>

        <div className="form-group-stock-price">
          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="product-price">Edit Product Price</label>
            <input
              type="text"
              name="product-price"
              className="input-strings"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Product Quantity */}
          <div className="form-group">
            <label htmlFor="product-quantity">Edit Product Quantity</label>
            <input
              type="text"
              name="product-quantity"
              className="input-strings"
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>

        {/* Product Category */}
        <div className="form-group">
          <label htmlFor="product-category">Edit Product Category</label>
          <select
            name="product-category"
            className="input-strings"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.length > 0
              ? categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))
              : null}
          </select>
        </div>

        {/* Product Image */}
        <div className="form-group">
          <label htmlFor="product-image">Edit Product Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="input-image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default UpdateProduct;
