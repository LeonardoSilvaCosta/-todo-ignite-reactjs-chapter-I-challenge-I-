import styles from './Header.module.scss';

import todoLogo from "../assets/Logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
       <img src={todoLogo} alt="to-do logo" />
    </header>
  );
}