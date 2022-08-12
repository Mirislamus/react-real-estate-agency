import logo from '../../images/footer/footerLogo.png';
import metalbank from '../../images/footer/metalbank.png';
import sberbank from '../../images/footer/sberbank.png';
import investbank from '../../images/footer/investorbank.png';
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <img src={logo} alt="footer-logo" />
          </div>
          <div className={styles.footerContact}>+7 (952) 434 27 30</div>
          <div className={styles.footerContact}>info@DP-Agent.ru</div>
          <div className={styles.footerContact}>г. Старый Оскол, м-он Дубрава квартал 3, дом 31 а</div>
        </div>
        <nav className={styles.footerNavigation}>
          <ul className={styles.footerCatalog}>
          <h3 className={styles.footerCatalogTitle}>Каталог</h3>
            <li><a className={styles.footerCatalogLink} href="/">Новостройки</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Дома</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Участки</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Комнаты</a></li>
          </ul>
          <ul className={styles.footerCatalog}>
          <h3 className={styles.footerCatalogTitle}>Услуги</h3>
            <li><a className={styles.footerCatalogLink} href="/">Заключение договора</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Ипотека</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Юридическое сопровождение</a></li>
            <li><a className={styles.footerCatalogLink} href="/">Оценка стоимости</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerBottomWrapper}>
        <div className={styles.bottomText}>© 2015-2017, “Деловой подход”.</div>
        <div className={styles.bottomBanks}>
          <a href="#"><img src={metalbank} alt="Металинвестбанк" /></a>
          <a href=""><img src={sberbank} alt="Сбербанк" /></a> 
          <a href=""><img src={investbank} alt="Инвесторгбанк" /></a> 
        </div>
        <div className={styles.bottomText}>Политика конфедициальности</div>
      </div>
    </footer>
  );
};

export default Footer;
