import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      const  taskItem = {value:task, completed: false};
      setTaskList([...taskList, taskItem]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);
  };

  const markAsComplete = (index) => {
    const updatedList = [...taskList];
    updatedList[index].completed = true;
    setTaskList(updatedList);
  };

  return (
    <div>
      <input className='form-control me-5' type="text" value={task} onChange={handleTaskChange} />
      <button className='btn btn-primary' onClick={addTask}>Add Task</button>

      <ul className="list-group">
      {taskList.map((task, index) => (
          <li className="list-group-item" key={index}>
             <span className='me-5'>{task.value}</span>
            {(!task.completed) && <button className='btn btn-success me-5' onClick={() => markAsComplete(index)}>Mark Complete</button>}
            {task.completed && <span className='me-5'>Completed</span>}
            <button  className='btn btn-danger me-5' onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
       </ul>
      
    </div>
  );
}

export default TodoList;
