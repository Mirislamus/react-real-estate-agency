import styles from "./Services.module.css";
import dollar from '../../images/svg/dollar.svg';
import like from '../../images/svg/like.svg';
import document from '../../images/svg/document.svg';

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.servicesWrapper}>
        <h1 className={styles.servicesTitle}>Сервисы</h1>
        <div className={styles.servicesGroup}>

          <div className={styles.servicesGroupItem}>
            <div className={styles.servicesImg}>
              <img src={dollar} alt="dollar" />
            </div>
            <div className={styles.servicesInfo}>
              <p className={styles.servicesDescr}>
                Оценка рыночной стоимости вашего жилья{" "}
              </p>
              <p className={styles.servicesText}>
                Узнайте сколько стоит ваш дом
              </p>
            </div>
          </div>

          <div className={styles.servicesGroupItem}>
            <div className={styles.servicesImg}>
              <img src={like} alt="like" />
            </div>
            <div className={styles.servicesInfo}>
              <p className={styles.servicesDescr}>
                Ипотека для покупки квартиры
              </p>
              <p className={styles.servicesText}>Подайте заявку на ипотеку</p>
            </div>
          </div>

          <div className={styles.servicesGroupItem}>
            <div className={styles.servicesImg}>
              <img src={document} alt="dollar" />
            </div>
            <div className={styles.servicesInfo}>
              <p className={styles.servicesDescr}>
                Договор покупки жилого помещения
              </p>
              <p className={styles.servicesText}>
                Сделайте все юридически правильно
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
