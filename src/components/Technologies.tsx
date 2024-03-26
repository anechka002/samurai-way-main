import React from 'react'
import { TaskPropsType } from '../App'

type TechnologiesPropsType = {
  tasks: TaskPropsType[]
}

function Technologies({tasks}: TechnologiesPropsType) {
  return (
    <div>
      <ul>
        
        {tasks.map((t)=>{
          return (
            <li key={t.id}>{t.title}</li>
          )
        })}
        
      </ul>
    </div>
  )
}

export default Technologies