import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    
    const newTask = {
      id: Date.now(), 
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h2>To Do List</h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button type="submit">Enviar</button>
        </form>

        <ul>
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              
              <div className="task-content" onClick={() => handleToggleComplete(task.id)}>
                <span className="checkbox-icon">
                  {task.completed ? '✅' : ''}
                </span>
                <span className="task-text">{task.text}</span>
              </div>
              
              
              <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;