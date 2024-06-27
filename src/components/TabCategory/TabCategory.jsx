import "./TabCategory.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState, useContext, useEffect } from "react";
import { createCategory } from "../../store/Actions/categoryAction";
import { ToastContext } from "../../context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchCategories } from "../../store/Actions/categoryAction";
import { useNavigate } from "react-router-dom";

function TabCategory() {
  //Redux Dispacth and Selector
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  //Toast Context
  const { addToast } = useContext(ToastContext);

  //Navigate
  const navigate = useNavigate();

  //State for the form
  const [category, setCategory] = useState("");
  const [editCategory, setEditCategory] = useState(false);

  //Edit Category
  const handleCategoryEdit = (id) => {
    setEditCategory(true);
    editCategory && navigate(`/dashboard?tab=edit-category&id=${id}`);
  };

  useEffect(() => {
    handleCategoryEdit();
  }, []);

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

  //Fetch Categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="add-category">
      <div className="top_side">
        <h2>List of Categories</h2>
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

      {/* Category Table */}
      <table className="tab-products-table">
        <thead>
          <tr className="tab-products-table-header">
            <th>Category Name</th>
            <th>Action</th>
          </tr>
          <tbody>
            {
              //Map through the categories
              categories.map((category) => (
                <tr key={category.id} className="tab-products-table-body">
                  <td>{category.name}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleCategoryEdit(category.id)}
                    >
                      Edit
                    </button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </thead>
      </table>

      <ToastContainer />
    </div>
  );
}

export default TabCategory;
