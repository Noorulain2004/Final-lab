// Dashboard se toggleComplete prop receive karein
function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-item">
      <div className="task-info">
        {/* Checkbox jo status change karega */}
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo._id, todo.completed)} 
        />
        
        {/* Agar completed ho toh text par line aa jaye (CSS ke zariye) */}
        <span className={todo.completed ? "completed" : ""}>
          {todo.task}
        </span>
      </div>

      <button 
        className="btn btn-danger" 
        onClick={() => deleteTodo(todo._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;