import TaskCard from "./TaskCard";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";

function TaskList({ }) {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return (
            <div>
                <h1 className="text-white font-bold text-center">No hay tareas</h1>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <TaskCard  key={task.id} task = {task} />
            ))}
        </div>
    );
}

export default TaskList;