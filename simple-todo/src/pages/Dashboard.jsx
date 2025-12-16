import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from '../components/TodoItem';

function Dashboard({ token }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  const config = { headers: { 'x-auth-token': token } };

  // Date format karne ke liye helper
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/todos', config);
      setTodos(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Empty spaces rokne ke liye
    try {
      const res = await axios.post('http://localhost:5000/api/todos', { task: input }, config);
      setTodos([res.data, ...todos]); // Naya task sabse upar add karo
      setInput('');
    } catch (err) { console.error(err); }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`, config);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) { console.error(err); }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        
        {/* --- HEADER SECTION --- */}
        <div className="dash-header">
          <div>
            <h1>My Tasks</h1>
            <p className="date-badge">📅 {today}</p>
          </div>
          <div className="task-count">
            <span>{todos.length}</span>
            <small>Tasks</small>
          </div>
        </div>

        {/* --- INPUT SECTION --- */}
        <form onSubmit={addTodo} className="add-task-form">
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="What needs to be done today?" 
            className="task-input"
          />
          <button type="submit" className="btn btn-primary add-btn">
            Add Task ➕
          </button>
        </form>

        {/* --- TASKS LIST --- */}
        <div className="task-list-wrapper">
          {loading ? (
            <p className="loading-text">Loading tasks...</p>
          ) : todos.length === 0 ? (
            <div className="empty-state">
              <span style={{ fontSize: '3rem' }}>🎉</span>
              <h3>All caught up!</h3>
              <p>You have no pending tasks. Enjoy your day!</p>
            </div>
          ) : (
            <div className="tasks-list">
              {todos.map(todo => (
                <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;