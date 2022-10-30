const { useState } = require("react")

const Todo = () => {
  const [tasks] = useState([
    { name: 'tarefa 1' },
    { name: 'tarefa 2' },
    { name: 'tarefa 3' },
  ]);

  const onSubmit = () => {}

  return (
    <div>
      <h1>TODO</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="type the task" />
        <button type="submit">create</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;