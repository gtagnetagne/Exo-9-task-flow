import { useState, useRef, useEffect } from "react";
import styles from "./taskItem.module.css";
import { RiDeleteBin2Fill, RiPencilLine, RiCheckLine, RiCloseLine } from "react-icons/ri";

export const TaskItem = ({ task, editTask, deleteTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(task.title);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) inputRef.current?.focus();
    }, [isEditing]);

    const startEdit = (e) => {
        e.stopPropagation();
        setEditValue(task.title);
        setIsEditing(true);
    };

    const confirmEdit = (e) => {
        e?.stopPropagation();
        const trimmed = editValue.trim();
        if (trimmed) updateTask(task.id, trimmed);
        setIsEditing(false);
    };

    const cancelEdit = (e) => {
        e?.stopPropagation();
        setEditValue(task.title);
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") confirmEdit(e);
        if (e.key === "Escape") cancelEdit(e);
    };

    return (
        <li
            className={`${styles.container} ${task.completed ? styles.success : styles.default}`}
            onClick={() => !isEditing && editTask(task.id, !task.completed)}
        >
            <div className={styles.item}>
                <div className={`${styles.id} ${task.completed ? styles.idSuccess : styles.idDefault}`}>
                    {task.id}
                </div>
                {isEditing ? (
                    <input
                        ref={inputRef}
                        className={styles.editInput}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={confirmEdit}
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : (
                    <div className={task.completed ? styles.contentSuccess : styles.contentDefault}>
                        {task.title}
                    </div>
                )}
            </div>
            <div className={styles.actions}>
                {isEditing ? (
                    <>
                        <button className="button-primary" onClick={confirmEdit}>
                            <RiCheckLine />
                        </button>
                        <button className="button-primary" onClick={cancelEdit}>
                            <RiCloseLine />
                        </button>
                    </>
                ) : (
                    <>
                        <button className="button-primary" onClick={startEdit}>
                            <RiPencilLine />
                        </button>
                        <button
                            className="button-primary"
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteTask(task.id);
                            }}
                        >
                            <RiDeleteBin2Fill />
                        </button>
                    </>
                )}
            </div>
        </li>
    );
};
