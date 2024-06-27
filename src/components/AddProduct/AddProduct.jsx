import "./AddProduct.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { createProduct } from "../../store/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContext } from "../../context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
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

  //Navigate
  const navigate = useNavigate();

  //Toast Context
  const { addToast } = useContext(ToastContext);

  //Handle Add Category Button
  const handleAddCategory = () => {
    navigate("/dashboard?tab=add-category");
  };

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
  const handelSubmit = async (e) => {
    e.preventDefault();

    //Upload image
    const imageURL = await uploadImage(file);

    //Dispatch the create product action
    dispatch(
      createProduct({
        name,
        description,
        price,
        stock,
        image: imageURL,
        categoryId,
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
    <div className="add-product">
      <div className="top_side">
        <h2>Add Product</h2>
        <button onClick={handleAddCategory}>+ Add New Category</button>
      </div>
      <form onSubmit={handelSubmit}>
        {/* Product Name */}
        <div className="form-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            name="product-name"
            className="input-strings"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Product Description */}
        <div className="form-group">
          <label htmlFor="product-description">Product Description</label>
          <textarea
            name="product-description"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
          ></textarea>
        </div>

        <div className="form-group-stock-price">
          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="product-price">Product Price</label>
            <input
              type="text"
              name="product-price"
              className="input-strings"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Product Quantity */}
          <div className="form-group">
            <label htmlFor="product-quantity">Product Quantity</label>
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
          <label htmlFor="product-category">Product Category</label>
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
          <label htmlFor="product-image">Product Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            className="input-image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default AddProduct;
