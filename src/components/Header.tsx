import React from 'react'
import { TitlePropsType } from '../App'

type HeaderPropsType = {
  titleItems: TitlePropsType[]
  title: string
}

function Header({titleItems, title}: HeaderPropsType) {
  return (
    <div>
      <h4>{title}</h4>
      {titleItems.map((t)=>{
        return (
            <a key={t.id} href="#">{t.title}</a>
        )
      })}
  
    </div>
  )
}

export default Header