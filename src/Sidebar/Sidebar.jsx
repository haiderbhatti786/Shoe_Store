import "./sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import { FaShopify } from "react-icons/fa";
const Sidebar = ({ handleChange }) => {
  console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="logo-cont">
          <h1 className="sidebar-title1">
            <FaShopify />
          </h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
