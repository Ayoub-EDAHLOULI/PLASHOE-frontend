import "./UpdateCategory.scss";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../store/Actions/categoryAction";
import { fetchCategories } from "../../../store/Actions/categoryAction";
import { ToastContext } from "../../../context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function UpdateCategory() {
  //State for the form
  const [category, setCategory] = useState("");

  //Toast Context
  const { addToast } = useContext(ToastContext);

  //Redux Dispatch
  const dispatch = useDispatch();

  //Get the category id from the url
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("id");

  //Update Category
  const handleUpdateCategory = () => {
    dispatch(updateCategory({ name: category, id: Number(categoryId) }))
      .then((response) => {
        addToast(response, "success");

        //Fetch the categories
        dispatch(fetchCategories());
        setCategory("");
      })
      .catch((error) => {
        console.log(error);
        addToast(error, "error");
      });

    //Empty the input field
    document.querySelector(".input-string").value = "";
  };

  return (
    <div className="update-category">
      <div className="top_side">
        <h2>Update Category</h2>
      </div>

      {/* Update Category */}
      <div className="form-group">
        <label htmlFor="category-name">Category Name</label>
        <input
          type="text"
          name="category-name"
          className="input-string"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleUpdateCategory}>+ Update Category</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default UpdateCategory;
