import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<View />}></Route>
        <Route path='/Add' element={<Add/>}></Route>
      </Routes>
    </div>
  )
}

export default App