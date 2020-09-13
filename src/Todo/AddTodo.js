import React, { useState } from "react";

function AddTodo({ onCreate }) {
  const styles = {
    form: {
      marginBottom: ".5rem",
    },
    input: {
      marginRight: ".5rem",
    },
    btn: {
      cursor: "pointer",
    },
  };

  const input = useInputValue("");

  function submitHandler(event) {
    event.preventDefault();
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  function useInputValue(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    return {
      bind: {
        value,
        onChange: (event) => setValue(event.target.value),
      },
      clear: () => setValue(""),
      value: () => value,
    };
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input style={styles.input} {...input.bind} />
      <button style={styles.btn}>Add todo</button>
    </form>
  );
}

export default AddTodo;
