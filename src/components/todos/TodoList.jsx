import { useState } from "react";
import TodoAccordion from "./TodoAccordion";
import TodoDescription from "./TodoDescription";

const TodoList = ({ todos }) => {
  const todoInTodo = todos.filter(todo => todo.state === 'TODO');
  const todoInWip = todos.filter(todo => todo.state === 'WIP');
  const todoInDone = todos.filter(todo => todo.state === 'DONE');

  const [showDescription, setShowDescription] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    console.log(todo);
    setShowDescription(true);
  }

  const handleCloseDescription = () => {
    setShowDescription(false);
  }

  return (
    <>
      <TodoAccordion
        state={'TODO'}
        todos={todoInTodo}
        onClick={handleTodoClick}
      />

      <TodoAccordion
        state={'WIP'}
        todos={todoInWip}
        onClick={handleTodoClick}
      />

      <TodoAccordion
        state={'DONE'}
        todos={todoInDone}
        onClick={handleTodoClick}
      />

      {showDescription && selectedTodo &&
        <TodoDescription
          todo={selectedTodo}
          onClose={handleCloseDescription}
        />
      }
    </>
  );
}

export default TodoList