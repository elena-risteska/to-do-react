import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoFilters() {
  const { filter, setFilter, todosFiltered } = useContext(TodosContext);

  return (
    <div>
      <button
        onClick={() => {
          setFilter("all");
          todosFiltered();
        }}
        className={`inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 ${
          filter === "all"
            ? "inline-block rounded-full active:bg-black border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
            : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter("active");
          todosFiltered();
        }}
        className={`inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 ${
          filter === "active"
            ? "inline-block rounded-full active:bg-black border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
            : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter("completed");
          todosFiltered();
        }}
        className={`inline-block rounded-full border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900 ${
          filter === "completed"
            ? "inline-block rounded-full active:bg-black border-2 border-neutral-800 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-100 hover:text-neutral-800 focus:border-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 motion-reduce:transition-none dark:text-neutral-600 dark:hover:bg-neutral-900 dark:focus:bg-neutral-900"
            : ""
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilters;
