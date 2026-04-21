import styles from "./footer.module.css";

export const Footer = ({ completedTasks }) => {
    if (!completedTasks) return null;

    return (
        <footer className={styles.footer}>
            <code>
                Avec TaskFlow tu as éliminé {completedTasks} tâche
                {completedTasks > 1 ? "s" : ""} !
            </code>
        </footer>
    );
};
