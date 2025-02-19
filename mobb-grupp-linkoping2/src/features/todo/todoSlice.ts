import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    todoInput: string;
}

const initialState: Todo[] = [];

let todoId = 1;

const todoSlice = createSlice({
    name: 'todos', 
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ todoInput: string }>) => {
            const { todoInput } = action.payload;
            state.push({id: todoId++, todoInput });
        },
        deleteTodo: (state, action: PayloadAction<{ todoId: number }>) => {
            return state.filter((todo) => todo.id !== action.payload.todoId);
        }
    }
});

export const { addTodo, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;
export type { Todo };
