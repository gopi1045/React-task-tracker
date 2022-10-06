import React from 'react'

function ListFun(props) {
    const {key,student}=props

    return (
    <div>
        <h2>This is {student.name} from {student.dept}</h2>
    </div>
  )
}

export default ListFun