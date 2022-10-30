import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Todo = () => {
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (task.length) {
      setListTasks(prevTasks => [...prevTasks, {
        id: uuid(),
        name: task
      }]);
      setTask('');
    }
  }

  const removeTask = (element) => {
    const filteredTasks = listTasks.filter(item => item.id !== element.id);
    setListTasks(filteredTasks);
  }

  return (
    <div>
      <h1>TODO</h1>

      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="type the task" 
          value={task} 
          onChange={event => setTask(event.target.value)} />
        <button type="submit">create</button>
      </form>

      {listTasks.length > 0 ? (
        <ul>
          {listTasks.map((task, index) => (
            <li key={index}>{task.name} - <button type="button" onClick={() => removeTask(task)}>remove</button></li>
          ))}
        </ul>
      ) : (
        <div><h5>there arent tasks to show, create one.</h5></div>
      )}
    </div>
  )
}

export default Todo;