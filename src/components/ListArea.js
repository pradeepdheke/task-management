import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { TaskList } from './TaskList'

export const ListArea= ({taskList, switchTask}) => {
// const entryList = taskList.filter(({type})=> type ==="entry")
  return (
    <div className='list-area'>
        <Row>
            <Col>
            <TaskList tableColor="primary" title = "Entry List" arrow= "right" list = {taskList} switchTask= {switchTask}/>
            </Col>
            <Col>
            <TaskList tableColor='warning' title = "Not-To-Do List" list = {taskList}/>

            <div className='text-end text-warning fw-bold'>You could have saved 40hrs</div>
            </Col>
        </Row>
        <div className='fw-bold'>Total Time Allocated is 55 hrs/w</div>
    </div>
  )
}
