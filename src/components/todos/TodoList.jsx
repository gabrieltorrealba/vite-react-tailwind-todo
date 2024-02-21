import { useState } from "react";
import TodoAccordion from "./TodoAccordion";
import TodoDescription from "./TodoDescription";
import TodoComputed from "./TodoComputed";

const TodoList = ({ todos }) => {
  const {TODO, WIP, DONE } = todos
  const todoItems = TODO.length + WIP.length
  console.log(todoItems);

  const [showDescription, setShowDescription] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleTodoClick = (todo) => {
    setSelectedTodo(todo);
    setShowDescription(true);
  }

  const handleCloseDescription = () => {
    setShowDescription(false);
  }

  return (
    <>
      <TodoAccordion
        state={'TODO'}
        todos={TODO}
        onClick={handleTodoClick}
      />

      <TodoAccordion
        state={'WIP'}
        todos={WIP}
        onClick={handleTodoClick}
      />

      <TodoAccordion
        state={'DONE'}
        todos={DONE}
        onClick={handleTodoClick}
      />

    <TodoComputed 
    items={todoItems}/>

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