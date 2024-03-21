import React, { useState, useContext } from 'react';
import { TaskContext } from "../context/TaskContext";



function TaskForm() { // Corregido aquí para destructurar correctamente los props (los corchetes hermano mio)

    const [title, setTitle] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const { createTask } = useContext(TaskContext)



    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title,
            descripcion
        })
        setTitle('')
        setDescripcion('')

    }
    return (
        <div className='max-w-md mx-auto :'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font bold text-white mb-3 '> Crea tu tarea </h1>
                <input
                    placeholder="escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} 
                    className=' bg-slate-300 p-3 w-full mb-2'
                    autoFocus
                />
                <textarea placeholder='Escribe la descripcion de la tarea'
                    onChange={e => setDescripcion(e.target.value)}
                    value={descripcion} 
                    className=' bg-slate-300 p-3 w-full mb-2' />
                <button className='-bg bg-red-500 px-2 py-2 text-white'>guardar</button>
            </form>

        </div>
    );
}

export default TaskForm;