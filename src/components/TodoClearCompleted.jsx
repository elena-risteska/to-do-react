import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoClearCompleted() {
  const { todos, setTodos } = useContext(TodosContext);

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  }

  return (
    <button
      onClick={clearCompleted}
      className="inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
    >
      Clear completed
    </button>
  );
}

export default TodoClearCompleted;
