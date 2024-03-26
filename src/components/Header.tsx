import React from 'react'
import { TitlePropsType } from '../App'

type HeaderPropsType = {
  titles: TitlePropsType[]
}

function Header({titles}: HeaderPropsType) {
  return (
    <div>
      
      {titles.map((t)=>{
        return (
          <a key={t.id} href="#">{t.title}</a>
        )
      })}
  
    </div>
  )
}

export default Header