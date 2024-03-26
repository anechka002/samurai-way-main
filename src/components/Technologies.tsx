import React from 'react'
import { TaskPropsType } from '../App'

type TechnologiesPropsType = {
  tasks: TaskPropsType[]
  title: string
}

function Technologies({tasks, title}: TechnologiesPropsType) {
  return (
    <div>
      <h4>{title}</h4>
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