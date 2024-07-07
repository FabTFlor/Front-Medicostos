import "./Card.css";

const Card = ({
  imgSrc,
  altText,
  title,
  subtitle,
  precio,
  bgColor,
  onClick,
}) => {
  return (
    <div
      className="card"
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <img className="imgcard" src={imgSrc} alt={altText}></img>
      <div className="card-content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p className="precio">{precio}</p>
      </div>
    </div>
  );
};

export default Card;
