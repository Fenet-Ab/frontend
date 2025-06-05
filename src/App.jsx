import { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import './custom.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [error, setError] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      setError('Task title cannot be empty');
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, title: newTask, completed: false }]);
    setNewTask('');
    setError('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app-container" style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #dbeafe, #e5e7eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '2rem', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', width: '100%', maxWidth: '480px' }}>
        {/* Welcome and Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 className="custom-welcome">Welcome 👋</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <FaTasks className="text-4xl" style={{ fontSize: '2.5rem', color: '#2563eb' }} />
            <span className="task-manager-title">Task Manager</span>
          </div>
        </div>

        {/* Task Form */}
        <form onSubmit={addTask} style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task"
              className="custom-input"
            />
            <button type="submit" className="custom-button">
              Add
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>

        {/* Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          {['all', 'pending', 'completed'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`filter-button ${filter === type ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Task List */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredTasks.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>No tasks available</p>
          ) : (
            filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.completed ? 'completed' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="task-checkbox"
                  />
                  <span
                    onClick={() => toggleTask(task.id)}
                    className={`task-title ${task.completed ? 'completed' : ''}`}
                  >
                    {task.title}
                  </span>
                </div>
                <button onClick={() => deleteTask(task.id)} className="delete-button" aria-label="Delete task">
                  🗑️
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
