import { createStore } from "redux";
import { todoReducer } from "./todoApp/todoReducer";

export const store = createStore(todoReducer);