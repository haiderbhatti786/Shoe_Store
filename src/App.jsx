import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import Nav from "./Navigation/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import Cart from "./components/Cart";
import Recommended from "./Recommended/Recommended";
import Favourite from "./components/Favourite";
import Sidebar from "./Sidebar/Sidebar";
// Database
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering by query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filtering by category
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice.toString() === selected ||
          title.toLowerCase().includes(selected.toLowerCase())
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={`${title}-${Math.random()}`}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Recommended handleClick={handleCategoryChange} />
      <Sidebar handleChange={handleCategoryChange} />
      <Router>
        <Nav query={query} handleInputChange={handleInputChange} />
        <Routes>
          <Route path="/" element={<Home result={result} />} />
          <Route path="/fav" element={<Favourite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
