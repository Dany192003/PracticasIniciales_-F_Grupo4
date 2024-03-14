import React, { useState } from 'react';

function TaskPage({ onBackToLogin }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: false },
    { id: 3, text: 'Tarea 3', completed: false }
  ]);

  const handleTaskClick = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div>
      <h2>Tareas</h2>
      <button onClick={onBackToLogin}>Regresar al Login</button>
      <ul>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleTaskClick(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;
