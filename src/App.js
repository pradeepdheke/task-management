import './App.css';
import {Container} from 'react-bootstrap'
import { AddTaskForm } from './components/AddTaskForm';
import { ListArea } from './components/ListArea';
import { useState } from 'react';

const weeklyHrs = 7*24
function App() {
  
  const [taskList, setTaskList] = useState([])
  const total = taskList.reduce((acc, item) => acc + +item.hr, 0)

  const addTask = task => {

    if (total + +task.hr > weeklyHrs) {
      return alert (
        "You have already exceeded the weekly hours"
      )
    }
    setTaskList([...taskList, task])
  }

  const switchTask = (id, type) => {
    const switchedArg = taskList.map((item, index)=> {
      if (item.id === id) {
        item.type = type
    
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

    <ListArea taskList= {taskList} switchTask = {switchTask} total = {total}/>


      </Container>
    </div>
  );
}

export default App;
