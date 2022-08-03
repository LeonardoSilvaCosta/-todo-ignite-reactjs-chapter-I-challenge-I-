import styles from "./Tasks.module.scss";
import Clipboard from "../assets/Clipboard.svg";
import { TasksItem } from "./TasksItem";

interface TasksProps {
  tasks: Task[];
}

type Task = {
  info?: string;
  done: boolean;
};

export function Tasks({ tasks }: TasksProps) {
  const doneTasks = tasks.filter((task) => {
    return task.done === true;
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.tasksContainer}>
        <div className={styles.tasksCounters}>
          <span>
            Tarefas criadas<p className={styles.numbers}>{tasks.length}</p>
          </span>
          <span>
            Concluídas<p className={styles.numbers}>{`${doneTasks.length} de ${tasks.length}`}</p>
          </span>
        </div>
        <div className={styles.tasksContent}>
          {tasks.length !== 0 ? (
            <TasksItem tasks={tasks} />
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
