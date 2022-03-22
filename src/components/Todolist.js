import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <Todo
            text={todo.text}
            key={index}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
