import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const handleClick = () => {
    alert("Modal")
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <nav className={styles.navigation}>
          <div className={styles.menu}>
            <span className={styles.menuSpan}></span>
            <span className={styles.menuSpan}></span>
            <span className={styles.menuSpan}></span>
          </div>

          <ul className={styles.navItem}>
            <li className={styles.navItemListBorder}>
              <a className={styles.navItemLink} href="#">
                Каталог недвижимости
              </a>
            </li>
            <li className={styles.navItemList}>
              <a className={styles.navItemLink} href="#">
                Новостройки
              </a>
            </li>
            <li className={styles.navItemList}>
              <a className={styles.navItemLink} href="#">
                Дома
              </a>
            </li>
            <li className={styles.navItemList}>
              <a className={styles.navItemLink} href="#">
                Участки
              </a>
            </li>
            <li className={styles.navItemList}>
              <a className={styles.navItemLink} href="#">
                Комнаты
              </a>
            </li>
            <li className={styles.navItemList}>
              <a className={styles.navItemLink} href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>

        <button onClick={handleClick} className={styles.btn} type="button">Подать заявку</button>
      </div>
    </div>
  );
};

export default Navbar;
