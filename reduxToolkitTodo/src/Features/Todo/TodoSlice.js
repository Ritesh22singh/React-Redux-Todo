import { createSlice, nanoid } from "@reduxjs/toolkit"; // here were import

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],

  // The initialState variable holds an object that represents the initial state of a to-do list application. This state includes a todos array with a single to-do item that has an id of 1 and a text of "Hello world".

  // This structure is commonly used in state management, especially in applications using frameworks or libraries like React and Redux, to manage the application's state in a predictable way.
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //reducers: This defines the reducer functions that will handle specific actions.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },

  // The todoSlice created by createSlice contains the initial state and two reducers: addTodo and removeTodo. These reducers define how the state should change in response to the corresponding actions. The addTodo reducer adds a new to-do item with a unique ID and text, while the removeTodo reducer removes a to-do item based on its ID. The slice is exported for use in other parts of the application, such as in a Redux store.
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
