import { createContext, useState, useEffect } from 'react';
import { tasks as data } from "../data/Task";


export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title, // Corregido el nombre de la propiedad
            id: tasks.length,
            descripcion: task.descripcion
        }]);
    }
    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data);
    }, []);


    return (

        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }}>
            {[props.children]}
        </TaskContext.Provider>

    );
}

