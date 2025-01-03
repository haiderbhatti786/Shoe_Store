import "./Nav.css";
import { useState } from "react";
import { FaHome, FaUserAlt, FaBars, FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/" className="a">
              <FaHome className="nav-link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/fav" className="a">
              <FiHeart className="nav-link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="a">
              <AiOutlineShoppingCart className="nav-link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/adduser" className="a">
              <AiOutlineUserAdd className="nav-link" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="a">
              <font className="nav-link">About</font>
            </NavLink>
          </li>
        </ul>

        <i style={{ position: "relative" }}>
          <FaSearch
            onClick={() => setSearchBarVisible(!searchBarVisible)}
            style={{
              position: "absolute",
              right: "-10px",
              top: "54%",
              transform: "translateY(-50%)",
            }}
          />
          {searchBarVisible && (
            <input
              type="text"
              placeholder="Search here"
              onChange={handleInputChange}
              value={query}
              style={{
                border: "none",
                outline: "none",
                height: "30px",
                borderBottom: "3px solid #fff",
                borderRadius: "20px",
                padding: "0 30px 0 10px",
                width: "200px",
                marginRight: "20px",
              }}
            />
          )}
        </i>
      </div>
    </nav>
  );
};

export default Nav;
