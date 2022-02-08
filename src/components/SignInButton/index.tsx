import styles from "./styles.module.scss";
import { FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export function SignInButton() {
  const isUserLogged = false;

  return isUserLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Gustavo Mendes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with GitHub
    </button>
  );
}
