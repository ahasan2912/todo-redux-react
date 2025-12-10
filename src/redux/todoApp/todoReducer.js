//Inital state

import { ADDITEM, DELETEITEM, EDITITEM } from "./actionType";

const initialState = {
    todolist: []
};


export const todoReducer = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case ADDITEM:
            return {
                ...state,
                todolist: [...state.todolist, action.payload]
            }
        case DELETEITEM:
            return {
                ...state,
                todolist: state.todolist.filter((data) => data.id !== action.payload)
            }
        case EDITITEM:
            return {
                ...state,
                todolist: state.todolist.map((data) =>
                    data.id === action.payload.id ? { ...data, ...action.payload } : data
                )
            };
        default:
            return state;
    }
}