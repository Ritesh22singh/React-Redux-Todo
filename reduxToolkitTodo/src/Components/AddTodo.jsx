import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Features/Todo/TodoSlice";

// In Above imported all fles

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //   The useDispatch hook from Redux is used to get the dispatch function.
  // This function is used to dispatch actions to the Redux store.

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input)); // Here we are dispatch todos with value
    setInput("");

    // The AddTodo component in React uses useState to manage the input field's state and useDispatch from Redux to add new todos. When the form is submitted, it dispatches an addTodo action with the input value and then resets the input field.
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
