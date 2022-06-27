import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'

export const TaskList = ({title, tableColor, arrow, list=[], switchTask}) => {
  return (
    <div className='mt-3'>
        <h2 className='text-center'>{title}</h2>
        <div className="table">
        <Table className='mt-3' striped bordered hover variant={tableColor}>
      <thead>
        <tr>
          <th>
      
          </th>
          <th>Task Name</th>
          <th>Hours</th>
          <th>Action</th>
        </tr>
        </thead>
      <tbody>
        {list.map((item, i)=> {
            return (
        <tr>
          <td className='text-center'>
            <Form.Check type="checkbox" />
          </td>
          <td>{item.task}</td>
            {item.hr>1?(

                <td>{item.hr} hrs</td>
                ):(
                <td>{item.hr} hr</td>
            )
            }
            <td>
            {arrow === "right" ? (

            
            <div className='text-center'>
              <Button variant='danger' onClick={()=> switchTask(item.id, "bad")}>
            <i class="fa-solid fa-trash-can"></i>
            </Button>
            <Button variant='warning' onClick={()=> switchTask(item.id, "bad")}>
            <i class="fa-solid fa-arrow-right"></i>
            </Button>
            </div>
            ) : (
              <div className='text-center'>
            <Button variant='primary' onClick={()=> switchTask(item.id, "entry")}>
            <i class="fa-solid fa-arrow-left"></i>
            </Button>
            <Button variant='danger' onClick={()=> switchTask(item.id, "bad")}>
            <i class="fa-solid fa-trash-can"></i>
            </Button>
              </div>
            )
        }
          </td>
        </tr>

            )
        })}
       
      </tbody>
    </Table>
        </div>
    </div>
  )
}
