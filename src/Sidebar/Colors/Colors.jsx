import Input from "../../components/Input";
import "./style.css";

const Colors = ({ handleChange, value, color }) => {
  return (
    <>
      <div>
        <h2 className=" color-title">Color</h2>
        <label className="sidebar-label-cont">
          <input
            onChange={handleChange}
            type="radio"
            value={value}
            name="test3"
          />
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test3"
          color="red"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />
        <label className="sidebar-label-cont">
          <input
            type="radio"
            onChange={handleChange}
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{
              backgroundColor: "white",
            }}
          ></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
