import { useEffect, useRef, useState } from "react"
import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"

export const TaskContainer = () => {

    const [tasksList, setTasksList] = useState([]);

    //Ce useEffect est pour le local storage de l'App
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasksList")
        if (storedTasks) { setTasksList(JSON.parse(storedTasks)); }
    }, [])

        const saveTasksToLocalStorage = (tasks)=>{
            localStorage.setItem("tasksList", JSON.stringify(tasks));  
        }


    const nextId = useRef(1);

    const addTask = (title) => {
        const newTask = {
            id: nextId.current++,
            title,
            completed: false,
        };
        const updatedTasks = [...tasksList, newTask];
        setTasksList(updatedTasks);
        saveTasksToLocalStorage (updatedTasks);
    };

    const editTask = (id, completedValue) => {
        const updatedTasks = tasksList.map((task) =>
                task.id === id ? { ...task, completed: completedValue } : task
        );
        setTasksList (updatedTasks);
        saveTasksToLocalStorage (updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = (tasksList.filter((task) => task.id !== id));
        setTasksList (updatedTasks);
        saveTasksToLocalStorage (updatedTasks);
    };

    const updateTask = (id, newTitle) => {
        const updatedTasks = 
            tasksList.map((task) =>
                task.id === id ? { ...task, title: newTitle } : task
        );
        setTasksList (updatedTasks);
        saveTasksToLocalStorage (updatedTasks);
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
