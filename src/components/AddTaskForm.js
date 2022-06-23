import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const AddTaskForm = () => {
  return (
    <Form>
      <Row className='g-2'>
        <Col md="6">
          <Form.Control placeholder="Task name" required />
        </Col>
        <Col md='3'>
          <Form.Control placeholder="10" type='number' required/>
        </Col>
        <Col>
        <Button variant='primary' type='submit'>Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddTaskForm;