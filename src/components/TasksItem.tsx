import styles from "./TasksItem.module.scss";
import { CgTrash } from "react-icons/cg";

interface TasksItemProps {
  tasks: Task[];
}

type Task = {
  info?: string;
  done: boolean;
};

export function TasksItem({ tasks }: TasksItemProps) {
  return (
    <>
      {tasks.map((task) => (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.checkboxContainer}>
              <input className={styles.input} type="checkbox" id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>
            <span>{task.info}</span>
            <CgTrash />
          </div>
        </div>
      ))}
    </>
  );
}
