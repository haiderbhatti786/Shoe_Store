import { AiFillStar, AiFillShopping } from "react-icons/ai";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-image" />
        <div className="card-details"></div>
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice} </del>
            {newPrice}
          </div>
          <div className="bag">
            <AiFillShopping className="bag-icon" />
          </div>
        </section>
      </section>
    </>
  );
};

export default Card;
