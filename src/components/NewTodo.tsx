import React, { useRef } from "react";

type newTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<newTodoProps> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredInputText = textRef.current!.value;
    props.onAddTodo(enteredInputText);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
