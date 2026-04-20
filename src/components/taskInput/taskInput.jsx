// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./taskInput.module.css";

export const TaskInput = () => {
    return (
        <div className={`box ${styles.element}`}>
            <h2 className={styles.title}>🎯 Ajoute ta prochaine tâche</h2>
            <form className={styles.container}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez un titre de tâche explicite."
                />
                <button className="button-primary" type="submit">
                    Ajouter
                </button>
            </form>
        </div>
    );
};