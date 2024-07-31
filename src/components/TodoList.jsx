import { useContext } from "react";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoClearCompleted from "./TodoClearCompleted";
import TodoCompleteAllTodos from "./TodoCompleteAllTodos";
import TodoFilters from "./TodoFilters";
import { TodosContext } from "../context/TodosContext";

function TodoList() {
  const { todos, setTodos, todosFiltered } = useContext(TodosContext);

  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function completeTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <>
      {todosFiltered().map((todo, index) => (
        <li className="flex justify-between items-center mt-6">
          <div className="flex items-center flex-1 mr-6">
            <input
              type="checkbox"
              onChange={() => completeTodo(todo.id)}
              checked={todo.isComplete ? true : false}
            />

            {!todo.isEditing ? (
              <span
                onDoubleClick={() => markAsEditing(todo.id)}
                className={`ml-4 ${todo.isComplete ? "line-through" : ""}`}
              >
                {todo.title}
              </span>
            ) : (
              <input
                type="text"
                onBlur={(event) => updateTodo(event, todo.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    updateTodo(event, todo.id);
                  } else if (event.key === "Escape") {
                    cancelEdit(event, todo.id);
                  }
                }}
                className="ml-2 w-full border-none px-1.5 py-2"
                defaultValue={todo.title}
                autoFocus
              />
            )}
          </div>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}

      <div className="flex justify-between items-center mt-5 pt-4 border-t-2 solid">
        <TodoCompleteAllTodos />

        <TodoItemsRemaining />
      </div>

      <div className="flex justify-between items-center mt-5 pt-4 border-t-2 solid">
        <TodoFilters />
        <div>
          <TodoClearCompleted />
        </div>
      </div>
    </>
  );
}

export default TodoList;
