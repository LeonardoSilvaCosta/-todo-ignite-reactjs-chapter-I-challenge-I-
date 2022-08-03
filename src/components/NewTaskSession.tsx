import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./NewTaskSession.module.css";

export function NewTaskSession() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.button} type="submit">
          Criar <AiOutlinePlusCircle />
        </button>
      </div>
    </div>
  );
}
