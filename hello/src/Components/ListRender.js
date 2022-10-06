import React from 'react'
import ListFun from './ListFun'
function ListRender() {
     const student=[
        {
            id:'1',
            name:'Gopi',
            dept:'IT'
        },
        {
            id:'2',
            name:'Gova',
            dept:'ECE'
        }
     ]
     const output=student.map(student=> <ListFun key={student.id} student={student}/>)
    
  return (
        <div>
            {output}
        </div>
  )
}

export default ListRender