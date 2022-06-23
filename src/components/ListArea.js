import React from 'react'
import {Col, Row} from 'react-bootstrap'
import { TaskList } from './TaskList'

export const ListArea= ({taskList, switchTask, total}) => {

const entryList = taskList.filter(({type})=> type ==="entry")
const badList = taskList.filter(({type})=> type ==="bad")
const badHrs = badList.reduce((acc, item)=> acc + +item.hr, 0)
  return (
    <div className='list-area'>
        <Row>
            <Col>
            <TaskList tableColor="primary" title = "Entry List" arrow= "right" list = {entryList} switchTask= {switchTask}/>
            </Col>
            <Col>
            <TaskList tableColor='warning' title = "Not-To-Do List" switchTask= {switchTask} list = {badList}/>

        <div className='text-end text-warning fw-bold'>You could have saved {badHrs} hrs</div>
            </Col>
        </Row>
        <div className='fw-bold'>Total Time Allocated is {total} hrs/w</div>
    </div>
  )
}
