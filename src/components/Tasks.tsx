import { useState } from "react";
import styles from "./Tasks.module.css";
import Clipboard from "../assets/Clipboard.svg";

export function Tasks() {
  const [task, setTask] = useState();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksCounters}>
          <span>
            Tarefas criadas<p className={styles.counter}>0</p>
          </span>
          <span>
            Concluídas<p className={styles.counter}>0</p>
          </span>
        </div>
        <div className={styles.tasksContent}>
          <img src={Clipboard} />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  );
}
