import styles from "./TasksItem.module.scss";
import { CgTrash } from "react-icons/cg";

interface TasksItemProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

type Task = {
  info?: string;
  done: boolean;
};

export function TasksItem({ tasks, setTasks }: TasksItemProps) {
  function handleDoneChange(task: Task) {
    const updatedTask = tasks.map((item) => {
      if (item.info === task.info) {
        task.done = !task.done;
        return item;
      }
      return item;
    });

    setTasks(updatedTask);
  }

  function handleDelete(task: Task) {
    const deletedTask = tasks.filter((item) => {
      if (item.info !== task.info) return item;
    });

    setTasks(deletedTask);
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.info} className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.checkboxContainer}>
              <input className={styles.input} type="checkbox" id={task.info} />
              <label
                htmlFor={task.info}
                onClick={() => handleDoneChange(task)}
              ></label>
            </div>
            <span>{task.info}</span>
            <CgTrash onClick={() => handleDelete(task)} />
          </div>
        </div>
      ))}
    </>
  );
}
