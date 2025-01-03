// import Nav from "../Navigation/Nav";
import Product from "../Products/Product";
import "./Home.css";

const Home = ({ result }) => {
  return (
    <div className="home">
      <Product result={result} />
    </div>
  );
};

export default Home;
