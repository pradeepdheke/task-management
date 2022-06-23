import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const initialState = {
  task: "",
  hr: "",
  type: "entry",
}
export const AddTaskForm = ({addTask}) => {
  const [form, setForm] = useState(initialState)

  const handleOnChange = e => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleOnSubmit= e => {
    e.preventDefault()
    addTask({...form, id: uuidv4()})
  } 
  return (
    <Form onSubmit= {handleOnSubmit}>
      <Row className='g-2'>
        <Col md="7">
          <Form.Control name='task' placeholder="Task name" required onChange={handleOnChange} />
        </Col>
        <Col md='3'>
          <Form.Control name='hr' placeholder="10" type='number' required onChange={handleOnChange}/>
        </Col>
        <Col>
        <Button variant='primary' type='submit'>Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTaskForm;