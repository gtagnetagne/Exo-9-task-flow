import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { TaskInput } from "./taskInput/taskInput"
import { TaskList } from "./taskList/taskList"

export const TackContainer = () => {
    return <main><Header /> <TaskInput /> <TaskList /><Footer /></main>
} 