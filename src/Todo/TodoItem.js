import React, { useContext } from "react";
import Context from "./Context";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);

  const styles = {
    li: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      marginBottom: ".5rem",
    },
    input: {
      marginRight: ".5rem",
      cursor: "pointer",
    },
    btn: {
      cursor: "pointer",
    },
  };

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          style={styles.input}
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button
        type="submit"
        style={styles.btn}
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        &#10006;
      </button>
    </li>
  );
}

export default TodoItem;
