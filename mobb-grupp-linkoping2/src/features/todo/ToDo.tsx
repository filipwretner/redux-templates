import { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo } from './todoSlice';
import './ToDo.css';

interface ToDoItem {
  id: number;
  task: string;
}

interface RootState {
  todos: ToDoItem[];
}

function ToDo() {
  const [task, setTask] = useState<string>('');
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddToDo = () => {
    if (task.trim()) {
      dispatch(addToDo({ task }));
      setTask('');
    }
  };

  const handleTodoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  return (
    <div className='todo-area'>
      <div>
        <h2>ToDo App</h2>
        <input
          type="text"
          placeholder='Enter task...'
          value={task}
          onChange={handleTodoChange}
        />
        <button onClick={handleAddToDo}>Add task</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => dispatch(deleteToDo({ id: todo.id }))}>
              Delete Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;