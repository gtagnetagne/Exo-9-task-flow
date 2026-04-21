import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = ({
    tasksList,
    editTask,
    deleteTask,
    updateTask,
    incompletedTasks,
}) => {

    if (tasksList.length === 0) {
        return (
            <div className="box">
                <h2 className={styles.emptyState}>
                    👋 Salut, Tu n'as rien à faire ! Profite de ton temps libre
                </h2>
            </div>
        );
    }

    return (
        <div className="box">
            <h2 className={styles.title}>
                {incompletedTasks > 0 ? (
                    <>
                        📄 Il te reste encore{" "}
                        <span className="important">{incompletedTasks}</span> tâche
                        {incompletedTasks > 1 ? "s" : ""} à accomplir !
                    </>
                ) : (
                    <>🤝 Génial, tu as accompli toutes tes tâches !</>
                )}
            </h2>
            <ul className={styles.container}>
                {tasksList.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        updateTask={updateTask}
                    />
                ))}
            </ul>
        </div>
    );
};
