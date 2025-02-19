import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, deleteToDo } from './todoSlice';
import './ToDo.css'

function ToDo() {
    const [task, setTask] = useState();
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddToDo = () => {
        if (task.trim()) {
            dispatch(addToDo({ task }));
            setTask('');
        }
    };


    function handleTodoChange(event) {
        setTask(event.target.value);
      }

    return(
        <div className='todo-area'>
            <div>
              <h2>ToDo App</h2>
              <input type="text" id="" placeholder='Enter task...' value={task} onChange={handleTodoChange}/>
              <button onClick={handleAddToDo}>Add task</button>
            </div>
            <ul>
                {todos.map((todo) => ( 
                    <li key={todo.id}>{todo.task}
                    <button onClick={() => dispatch(deleteToDo( {id: todo.id} ))}>Delete Task</button>
                    </li>
                 ))};
            </ul>
        </div>
        

    )

}

export default ToDo;