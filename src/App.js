import './App.css';
import {Container} from 'react-bootstrap'
import { AddTaskForm } from './components/AddTaskForm';
import { ListArea } from './components/ListArea';

function App() {
  return (
    <div className="wrapper">
      <Container>
        <h1 className='text-center py-5'>
          Task Management
        </h1>
      {/* form comp */}
      <AddTaskForm/>
      <hr className='mt-5'/>
    {/* List component */}

    <ListArea/>


      </Container>
    </div>
  );
}

export default App;
