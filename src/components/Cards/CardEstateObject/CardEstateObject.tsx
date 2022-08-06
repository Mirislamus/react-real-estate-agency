import { Estate } from "../../../types/models/estate";
import styles from "./CardEstateObject.module.css"

interface EstateProps {
  product: Estate;
}

const CardEstateObject = ({ product }: EstateProps) => {
  return (
    <div className={styles.estate}>
      <div className={styles.estateImg}>
        <img src={product.image} alt="area" />
      </div>
      <div className={styles.estateTitle}>{product.title}</div>
      <div className={styles.estateDesc}>{product.description}</div>
    </div>
  );
};

export default CardEstateObject;
