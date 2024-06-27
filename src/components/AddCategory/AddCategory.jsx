import "./AddCategory.scss";
import { useDispatch } from "react-redux";
import { useState, useContext } from "react";
import { createCategory } from "../../store/Actions/categoryAction";
import { ToastContext } from "../../context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCategory() {
  //Redux Dispatch and Selector
  const dispatch = useDispatch();

  //Toast Context
  const { addToast } = useContext(ToastContext);

  //State for the form
  const [category, setCategory] = useState("");

  //Add Category
  const handleAddCategory = () => {
    dispatch(createCategory({ name: category }))
      .then((response) => {
        addToast(response, "success");
        setCategory("");
      })
      .catch((error) => {
        addToast(error, "error");
      });

    //Empty the input field
    document.querySelector(".input-string").value = "";
  };

  return (
    <div className="add-category">
      <div className="top_side">
        <h2>Add Category</h2>
      </div>
      {/* Add Category */}
      <div className="form-group">
        <label htmlFor="category-name">Category Name</label>
        <input
          type="text"
          name="category-name"
          className="input-string"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>+ Add Category</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddCategory;
