import { Estate } from "../../../types/models/estate";
import "./CardEstateObject.scss";

interface EstateProps {
  product: Estate;
}

const CardEstateObject = ({ product }: EstateProps) => {
  return (
    <div className="estate">
      <div className="estate-img">
        <img src={product.image} alt="area" />
      </div>
      <div className="estate-title">{product.title}</div>
      <div className="estate-desc">{product.description}</div>
    </div>
  );
};

export default CardEstateObject;
