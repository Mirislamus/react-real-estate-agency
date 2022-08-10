import { Estate } from "../../../types/models/estate";
import styles from "./CardEstateObject.module.css"

interface EstateProps {
  item: Estate;
}

const CardEstateObject = ({ item }: EstateProps) => {
  return (
    <div className={styles.estate}>
      <div className={styles.estateImg}>
        <img src={item.image} alt="area" />
      </div>
      <div className={styles.estateTitle}>{item.title}</div>
      <div className={styles.estateDesc}>{item.description}</div>
    </div>
  );
};

export default CardEstateObject;
