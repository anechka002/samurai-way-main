import React from 'react';
import './App.css';
import Header from './components/Header';
import Technologies from './components/Technologies';

export type TaskPropsType = {
  id: number
  title: string
}
export type TitlePropsType = {
  id: number
  title: string
}

function App() {
  const task: Array<TaskPropsType> = [
    {id: 1, title: 'css'},
    {id: 2, title: 'html'},
    {id: 3, title: 'js'},
    {id: 4, title: 'react'},
  ]
  const item: Array<TitlePropsType> = [
    {id: 1, title: '-Home- '},
    {id: 2, title: '-News Feed- '},
    {id: 3, title: '-Messages- '},
  ]
  return (
    <div>
      <Header titleItems={item} title={'New Header'}/>
      <Technologies tasks={task} title={'Menu'}/>
    </div>
  );
}

export default App;
