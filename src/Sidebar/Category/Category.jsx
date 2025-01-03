import Input from "../../components/Input";
import "./category.css";
const Category = ({ handleChange, value }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title">Category</h2>
        <div className="labels">
          <label className="sidebar-label-cont">
            <input
              onChange={handleChange}
              type="radio"
              value={value}
              name="test"
            />
            <span className="checkmark"></span>All
          </label>
          <Input
            handleChange={handleChange}
            value="sneakers"
            name="test"
            title="Sneakers"
          />
          <Input
            handleChange={handleChange}
            value="flats"
            name="test"
            title="Flats"
          />
          <Input
            handleChange={handleChange}
            value="sandals"
            name="test"
            title="Sandals"
          />
          <Input
            handleChange={handleChange}
            value="heels"
            name="test"
            title="Heels"
          />
        </div>
      </div>
    </>
  );
};

export default Category;
