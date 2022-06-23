import './App.css';
import {Container} from 'react-bootstrap'
import { AddTaskForm } from './components/AddTaskForm';
import { ListArea } from './components/ListArea';
import { useState } from 'react';

function App() {

  const [taskList, setTaskList] = useState([])

  const addTask = task => {
    setTaskList([...taskList, task])
  }

  const switchTask = (i, type) => {
    const switchedArg = taskList.map((item, index)=> {
      if (index === i) {
        const dt = (item.type = type)
      return dt
      }
      return item
    })

    setTaskList(switchedArg)
  }
  return (
    <div className="wrapper">
      <Container>
        <h1 className='text-center py-5'>
          Task Management
        </h1>
      {/* form comp */}
      <AddTaskForm addTask= {addTask}/>
      <hr className='mt-5'/>
    {/* List component */}

    <ListArea taskList= {taskList} switchTask = {switchTask}/>


      </Container>
    </div>
  );
}

export default App;
