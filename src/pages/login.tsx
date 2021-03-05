
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <section className={styles.container}>
      <section className={styles.img}>
        <img src="icons/bg.svg" alt="level" />
      </section>
      <section>
        <div className={styles.logo}>
          <img src="icons/logo.svg" alt="level" />
        </div>
        <div className={styles.boasvindas}>
          <p>Bem-Vindo</p>
        </div>
        <div className={styles.git}>
          <img src="/icons/github.svg" alt="git" />
          <button className={styles.btn}>
            Faça Login com seu Github para começar
          </button>
        </div>
        <div className={styles.inputLogin}>
          <input className={styles.user} type="Digite seu username" />
          <img src="/icons/teste.svg" alt="git" />
        </div>
      </section>
    </section>
  );
}
