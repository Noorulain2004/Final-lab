import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TodoItem from '../components/TodoItem';

function Dashboard({ token }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = 'http://4.213.157.248:5000/api/todos';

  // 1. Fetch Todos Logic
  const fetchTodos = useCallback(async () => {
    // Config ko yahan define karna best hai taake latest token use ho
    const config = { headers: { 'x-auth-token': token } };
    try {
      const res = await axios.get(API_BASE_URL, config);
      setTodos(res.data);
    } catch (err) {
      console.error("Fetch Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // 2. Add Todo
  const addTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const config = { headers: { 'x-auth-token': token } };
    try {
      const res = await axios.post(API_BASE_URL, { task: input }, config);
      setTodos([res.data, ...todos]); 
      setInput('');
    } catch (err) {
      alert("Failed to add task: " + (err.response?.data?.msg || "Server Error"));
    }
  };

  // 3. Delete Todo
  const deleteTodo = async (id) => {
    const config = { headers: { 'x-auth-token': token } };
    try {
      await axios.delete(`${API_BASE_URL}/${id}`, config);
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      alert("Could not delete task");
    }
  };

  // 4. Toggle Complete
  const toggleComplete = async (id, completed) => {
    const config = { headers: { 'x-auth-token': token } };
    try {
      await axios.put(`${API_BASE_URL}/${id}`, { completed: !completed }, config);
      setTodos(todos.map(t => t._id === id ? { ...t, completed: !completed } : t));
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
    }
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'long'
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dash-header">
          <div>
            <h1>My Tasks</h1>
            <p className="date-badge">📅 {today}</p>
          </div>
          <div className="task-count">
            <span>{todos.length}</span>
            <small>Total</small>
          </div>
        </div>

        <form onSubmit={addTodo} className="add-task-form">
          <input 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            placeholder="What needs to be done?" 
            className="task-input"
          />
          <button type="submit" className="btn btn-primary add-btn">Add ➕</button>
        </form>

        <div className="task-list-wrapper">
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : (
            <div className="tasks-list">
              {todos.map(todo => (
                <TodoItem 
                  key={todo._id} 
                  todo={todo} 
                  deleteTodo={deleteTodo}
                  toggleComplete={toggleComplete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;