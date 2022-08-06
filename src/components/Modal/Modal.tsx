import styles from "./Modal.module.css"

const Modal = () => {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.modal}>
        <div className={styles.modalText}>Есть вопросы? Оставьте заявку и мы проконсультируем вас</div>
        <form className={styles.form} action="#">
          <label htmlFor="">
            <input className={styles.inputModalForm} type="text" placeholder="Ваше имя" />
          </label>
          <label htmlFor="">
            <input className={styles.inputModalForm} type="tel" placeholder="+7 XXX XXX XX XX" />
          </label>
          <label htmlFor="">
            <input className={styles.inputModalForm} type="email" placeholder="email" />
          </label>
          <button className={styles.btnModal} type="submit">Перезвоните мне</button>
          <div className={styles.agreement}>
            <input type="checkbox" value="" />
            <label className={styles.checkBoxText}>Оставляя заявку вы соглашаетесь на обработку ваших персональных данных</label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Modal;