import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle }) {
  const styles = {
    ul: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  };

  return (
    <ul style={styles.ul}>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            key={todo.id}
            onChange={onToggle}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
