const { useState } = require("react")

const Todo = () => {
  const [task, setTask] = useState('');
  const [listTasks, setListTasks] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (task.length) {
      setListTasks(prevTasks => [...prevTasks, task]);
      setTask('');
    }
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
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <div><h5>there arent tasks to show, create one.</h5></div>
      )}
    </div>
  )
}

export default Todo;