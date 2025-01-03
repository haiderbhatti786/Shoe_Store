const Button = ({ value, title, onClickHandle }) => {
  return (
    <button onClick={onClickHandle} value={value} className="btns">
      {title}
    </button>
  );
};

export default Button;
