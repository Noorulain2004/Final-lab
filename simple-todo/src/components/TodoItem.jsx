function TodoItem({ todo, deleteTodo }) {
  return (
    <div className="todo-item">
      <span className={todo.completed ? "completed" : ""}>
        {todo.task}
      </span>
      <button 
        className="btn btn-danger" 
        onClick={() => deleteTodo(todo._id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;  // <--- YEH LINE ZAROORI HAI