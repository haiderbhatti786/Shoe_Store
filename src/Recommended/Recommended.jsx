import Button from "../components/Button";
import "./style.css";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recmen">
      <h2 className="rec-title">Recommended</h2>
      <div className="recbtns">
        <Button onClickHandle={handleClick} value="" title="All Products" />
        <Button onClickHandle={handleClick} value="Nike" title="Nike" />
        <Button onClickHandle={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandle={handleClick} value="Puma" title="Puma" />
        <Button onClickHandle={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export default Recommended;
