import styles from "./Form.module.css";

const Form = () => {
  return (
    <section className={styles.formRequest}>
      <div className={styles.formWrapper}>
        <div className={styles.title}>
          <h2 className={styles.titleName}>
            Подберем для вас квартиру мечты
          </h2>
          <p className={styles.titleText}>
            Отправьте заявку онлайн сразу в несколько банков и сократите время
            оформления ипотеки.
          </p>
        </div>

        <form className={styles.form}>
          <h3 className={styles.formTitle}>Оставьте заявку</h3>
          <p className={styles.formTitleText}>Наш менеджер свяжется с вами для уточнения деталей</p>

          <input className={styles.formInput} type="text" placeholder="Ваше имя"/>
          <input className={styles.formInput} type="email" placeholder="Ваш email"/>
          <input className={styles.formInput} type="tel" placeholder="Ваше телефон"/>

          <button className={styles.formBtn} type="submit">Отправить заявку</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
