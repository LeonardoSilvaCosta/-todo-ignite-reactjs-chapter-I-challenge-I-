import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { v4 as uuid } from 'uuid';

import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import styles from "./NewTaskSession.module.scss";
import { Tasks } from "./Tasks";

type Task = {
  id: string;
  info?: string;
  done: boolean;
};

export function NewTaskSession() {
  const [taskInfo, setTaskInfo] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleSubmit(e: any) {
    e.preventDefault();

    const newData = [...tasks];
    const newTask = {id: uuid(), info: taskInfo, done: false };

    newData.push(newTask);

    setTasks(newData);
    setTaskInfo("");
  }

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            className={styles.input}
            type="text"
            value={taskInfo}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTaskInfo(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Criar <AiOutlinePlusCircle />
          </button>
          <ToastContainer />
        </form>
      </div>
      <Tasks tasks={tasks} setTasks={setTasks} />
    </>
  );
}
