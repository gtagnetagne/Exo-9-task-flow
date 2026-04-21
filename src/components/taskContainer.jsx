import { useRef, useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"

export const TaskContainer = () => {

    const [tasksList, setTasksList] = useState([]);
    const nextId = useRef(1);

    const addTask = (title) => {
        const newTask = {
            id: nextId.current++,
            title,
            completed: false,
        };
        setTasksList([...tasksList, newTask]);
    };

    const editTask = (id, completedValue) => {
        setTasksList(
            tasksList.map((task) =>
                task.id === id ? { ...task, completed: completedValue } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasksList(tasksList.filter((task) => task.id !== id));
    };

    const updateTask = (id, newTitle) => {
        setTasksList(
            tasksList.map((task) =>
                task.id === id ? { ...task, title: newTitle } : task
            )
        );
    };

    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;

    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList
                tasksList={tasksList}
                editTask={editTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                incompletedTasks={incompletedTasks}
            />
            <Footer completedTasks={completedTasks} />
        </main>
    );
}
