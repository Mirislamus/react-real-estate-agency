import { text } from "stream/consumers";
import logo from "../../images/logo.png";
import Navbar from "../Navbar/Navbar";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <div className={styles.headerContentLeft}>
              <div className="header-logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className={styles.headerText}>
                Проверенная база недвижимости <br />
                г. Старый Оскол
              </div>
            </div>
            <div className="header-info">
              <a className={styles.headerInfoLink} href="tel:+88005113908">
                {" "}
                8 (800) 511-39-08{" "}
              </a>
              <p className={styles.headerInfoText}>
                Старый Оскол, Лесной проспект 19
              </p>
            </div>
          </div>
        </div>

        <hr />

        <Navbar />

        <hr />

        <div className={styles.headerMain}>
          <div className="container">
            <h1 className={styles.headerMainText}>
              Покупка и продажа недвижимости в Старом Осколе
            </h1>
            <div className={styles.headerSections}>
              <div className={styles.headerSectionsElementActive}>
                Новостройки
              </div>
              <div className={styles.headerSectionsElement}>Дома</div>
              <div className={styles.headerSectionsElement}>Участки</div>
              <div className={styles.headerSectionsElement}>Комнаты</div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.headerSettingsForm}>
            <form action="#">
              <div className={styles.rooms}>
                <label className={styles.roomsNumber}>
                  <input type="checkbox" value={1} />1
                </label>
                <label className={styles.roomsNumber}>
                  <input type="checkbox" value={2} />2
                </label>
                <label className={styles.roomsNumber}>
                  <input type="checkbox" value={3} />3
                </label>
                <label className={styles.roomsNumber}>
                  <input type="checkbox" value={4} />
                  4+
                </label>
              </div>

              <div className={styles.priceAndArea}>
                <label className={styles.price}>
                  <span>Цена</span>
                  <input type="tel" placeholder="от" />
                  <input type="tel" placeholder="до" />
                  <span>&#8381;</span>
                </label>

                <label className={styles.price}>
                  Площадь
                  <input type="tel" placeholder="от" />
                  <input type="tel" placeholder="до" />
                  <span>М</span>
                </label>
              </div>

              <div className={styles.district}>
                <select>
                  <option value="Район">Район</option>
                  <option value="mirzo-ulugbek avenue">
                    Mirzo-Ulugbek Avenue
                  </option>
                  <option value="Mirabad Avenue">Mirabad Avenue</option>
                  <option value="Darxan Avenue">Darxan Avenue</option>
                  <option value="Chilanzar Avenue">Chilanzarр Avenue</option>
                </select>
              </div>
            </form>
          </div>
          <button className={styles.btnForm} type="submit">
            Показать предложения
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
