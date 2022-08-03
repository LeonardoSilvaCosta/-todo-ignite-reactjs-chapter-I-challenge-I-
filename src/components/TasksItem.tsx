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
      if(item.info === task.info) {
        task.done = !task.done;
        return item;
      }
      return item;
    })
    
    setTasks(updatedTask);
  }
  
  return (
    <>
      {tasks.map((task) => (
        <div key={task.info} className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.checkboxContainer}>
              <input className={styles.input} type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" onClick={() => handleDoneChange(task)}></label>
            </div>
            <span>{task.info}</span>
            <CgTrash />
          </div>
        </div>
      ))}
    </>
  );
}
