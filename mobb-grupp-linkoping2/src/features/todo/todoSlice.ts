import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    task: string;
}

const initialState: Todo[] = [];

let id = 1;

const todoSlice = createSlice({
    name: 'todos', 
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<{ task: string }>) => {
            const { task } = action.payload;
            state.push({id: id++, task });
        },
        deleteToDo: (state, action: PayloadAction<{ id: number }>) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    }
});

export const { addToDo, deleteToDo} = todoSlice.actions;
export default todoSlice;
export type { Todo };
