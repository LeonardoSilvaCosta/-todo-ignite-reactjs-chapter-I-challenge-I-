import { useState } from "react";
import styles from "./Tasks.module.scss";
import Clipboard from "../assets/Clipboard.svg";
import { TasksItem } from "./TasksItem";

export function Tasks(props = null) {
  const [task, setTask] = useState();

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksCounters}>
          <span>
            Tarefas criadas<p className={styles.numbers}>0</p>
          </span>
          <span>
            Concluídas<p className={styles.numbers}>0</p>
          </span>
        </div>
        <div className={styles.tasksContent}>
          {!props ? (
            <TasksItem props={props} />
          ) : (
            <>
              <img src={Clipboard} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
