import './App.css';
import {Button, Container} from 'react-bootstrap'
import { AddTaskForm } from './components/AddTaskForm';
import { ListArea } from './components/ListArea';
import { useState } from 'react';

const weeklyHrs = 7*24
function App() {
  
  const [taskList, setTaskList] = useState([])
  const [ids, setIds] = useState([])
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

  const handleOnCheck = (e) => {
    const {checked, value, name} = e.target
    console.log(e)
    console.log(checked, value, name)

    if (value === "entry" || value === "bad") {
      let toDeleteIds = []
      taskList.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item.id)
        }
      })

      // if ticked add all ids in array, or take them out
      if (checked) {
        // add all entry list ids
        setIds([...ids, ...toDeleteIds])
      } else {
        const tempArgs = ids.filter((id) => !toDeleteIds.includes(id))
        setIds(tempArgs)
      }
      return
    }
    if (checked) {
      // add individual item id
      setIds([...ids, value])
    }  else {
      // remove individual ids
      const filteredArg = ids.filter(id => id !== value)

  


      setIds(filteredArg)
    }
  }
  
  const handleOnDelete = () => {
    if (
      !window.confirm("Are you sure you want to delete the selected items?")
    ) {
      return;
    }
    const tempArg = taskList.filter((item) => !ids.includes(item.id))
    setTaskList(tempArg)
    setIds([])
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

    <ListArea taskList= {taskList} switchTask = {switchTask} total = {total} ids ={ids} handleOnCheck = {handleOnCheck}/>

    <div className="mt-2">
      {ids.length > 0 && (

        <Button variant='danger' onClick={handleOnDelete}>
           Delete Selected Task <i class="fa-solid fa-trash-can"></i>
            </Button>
      )
      
    }
     
    </div>


      </Container>
    </div>
  );
}

export default App;
