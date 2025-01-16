import React, {useState} from 'react'
import "./todolist.css";
function TodoList() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
    const [newTask, setNewTask] = useState('');
    
    function handleinputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== '') {
            console.log(newTask);
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
        
    }
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(t => updatedTasks);
    }
    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(t => updatedTasks);
        }
        
    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(t => updatedTasks);
        }
        
    }


return (
    <div className='to-do-list'>
        <h1>TodoList</h1>
        <div>
            <input 
                type="text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleinputChange} />
            <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => (
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete  </button>
                    <button className='move-button' onClick={() => moveTaskUp(index) }>👆</button>
                    <button className='move-button' onClick={()=> moveTaskDown(index)}>👇</button>
                </li>
            ))}
        </ol>
        
    </div>
)
}

export default TodoList