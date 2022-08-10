import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import styles from "./CardFlat.module.css";

const CardFlat = () => {
  return (
    <section className={styles.flat}>
      <div className={styles.flatTitle}>
        <div className={styles.titleContent}>
          <div>
            <svg
              width="43"
              height="36"
              viewBox="0 0 43 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.8014 13.2509C28.8993 13.2509 29.7893 12.3609 29.7893 11.263C29.7893 10.165 28.8993 9.27502 27.8014 9.27502C26.7035 9.27502 25.8135 10.165 25.8135 11.263C25.8135 12.3609 26.7035 13.2509 27.8014 13.2509Z"
                fill="#FF4D35"
              />
              <path
                d="M26.7243 2.68376L26.6437 2.89443L26.7243 2.68376C24.811 1.95251 22.6372 2.41332 21.1858 3.85789L21.3114 3.98406L21.1858 3.85789L16.3068 8.71402C14.7946 10.2191 14.3585 12.534 15.2225 14.4771C15.4578 15.0064 15.7119 15.5252 15.9823 16.0286L5.39288 26.618C5.11755 26.8933 4.9629 27.2667 4.9629 27.6561V33.1229C4.9629 33.9337 5.62014 34.5909 6.43093 34.5909H11.8977C12.7085 34.5909 13.3658 33.9337 13.3658 33.1229V31.112L15.3766 31.112C16.1874 31.112 16.8446 30.4547 16.8446 29.644V27.6332H18.8555C19.6663 27.6332 20.3235 26.9759 20.3235 26.1651C20.3235 25.3544 19.6663 24.6971 18.8555 24.6971H15.3766C14.5658 24.6971 13.9086 25.3544 13.9086 26.1651V28.1759L11.8977 28.176C11.0869 28.176 10.4297 28.8332 10.4297 29.644V31.6549H7.89897V28.2642L18.8507 17.3125C19.3289 16.8342 19.4186 16.0912 19.0678 15.5129L19.0678 15.5129C18.6423 14.8117 18.2512 14.0618 17.9055 13.2842L17.9055 13.2842C17.534 12.4486 17.723 11.4471 18.3782 10.7949L23.2571 5.93885C23.2571 5.93885 23.2572 5.93884 23.2572 5.93884C23.8908 5.3083 24.8405 5.10702 25.6762 5.42634C27.1033 5.97181 29.1503 6.97267 30.8318 8.64639L30.991 8.48651L30.8318 8.6464C32.5239 10.3305 33.5587 12.4085 34.1294 13.8616C34.4563 14.6941 34.2577 15.6397 33.6233 16.2711L33.7824 16.431L33.6233 16.2711L28.6854 21.1859C28.6854 21.1859 28.6854 21.1859 28.6854 21.1859C28.0314 21.8367 27.0553 22.0276 26.1968 21.6705C25.4305 21.3518 24.6885 20.9732 23.9918 20.5455C23.3008 20.1214 22.3968 20.3378 21.9727 21.0288C21.5486 21.7198 21.7649 22.6238 22.4559 23.0479C23.2831 23.5556 24.1623 24.0042 25.0692 24.3814C27.0256 25.1952 29.2586 24.7579 30.7566 23.2669L35.6945 18.3522C37.1587 16.8948 37.6172 14.7109 36.8622 12.7885L36.6523 12.8709L36.8622 12.7885C36.1926 11.0835 34.9618 8.61451 32.9029 6.56544C30.8512 4.52324 28.4078 3.32723 26.7243 2.68376Z"
                fill="#FF4D35"
                stroke="#FF4D35"
                stroke-width="0.451162"
              />
            </svg>
          </div>
          <div>
            <h2 className={styles.flats}>Квартиры</h2>
          </div>
        </div>
        <a href="#" className={styles.flatAll}>
          Смотреть все
        </a>
      </div>

      <div className={styles.flatGroup}>
        <AwesomeSlider animation="cubeAnimation"
                       organicArrows={false} 
                       className={styles.awssld}
                      
                       >
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80" />
          <div data-src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1578&q=80" />

          <button aria-label="next" className="awssld__next"><span className="awssld__controls__arrow-right"></span></button>
        </AwesomeSlider>
        <AwesomeSlider organicArrows={false} className={styles.awssld}>
        <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </AwesomeSlider>
        <AwesomeSlider organicArrows={false} className={styles.awssld}>
        <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <div data-src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </AwesomeSlider>
      </div>
    </section>
  );
};

export default CardFlat;
