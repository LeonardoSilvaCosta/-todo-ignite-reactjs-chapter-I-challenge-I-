import styles from "./TasksItem.module.scss";
import { CgTrash } from "react-icons/cg";

export function TasksItem() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.checkboxContainer}>
          <input className={styles.input} type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"></label>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          animi culpa ist et more than
        </span>
        <CgTrash />
      </div>
    </div>
  );
}
