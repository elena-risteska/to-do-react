import { useEffect, useState, useRef } from "react";
import NoTodos from "./components/NoTodos.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import useLocalStorage from "./hooks/useLocalStorage.js";
import "./App.css";
import { TodosContext } from "./context/TodosContext.js";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  const [name, setName] = useLocalStorage("name", "");

  const nameInputEl = useRef(null);
  const [todos, setTodos] = useLocalStorage("todos", []);

  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);

  const [filter, setFilter] = useState("all");

  function todosFiltered() {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => !todo.isComplete);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    }
  }

  useEffect(() => {
    nameInputEl.current.focus();

    return function cleanup() {};
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
  }

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        idForTodo,
        setIdForTodo,
        todosFiltered,
        filter,
        setFilter,
      }}
    >
      <div className="m-auto mt-8 p-8 bg-slate-50 rounded-lg max-w-lg">
        <div className="mb-10">
          <h2>What is your name?</h2>
          <form action="#">
            <input
              type="text"
              ref={nameInputEl}
              className="w-full border-none border-slate-300 p-3.5 mt-3.5"
              placeholder="What is your name"
              value={name}
              onChange={handleNameInput}
            />
          </form>

          <CSSTransition
            in={name.length > 0}
            timeout={300}
            className="mt-2"
            unmountOnExit
          >
            <p>Hello, {name}</p>
          </CSSTransition>
        </div>
        <h2>Todo App</h2>
        <TodoForm />

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={todos.length > 0}
            timeout={300}
            className=""
            unmountOnExit
          >
            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
