import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Footer from './Footer'
import MainTag from './MainTag'
import ReserveATable from './ReserveATable'

function App() {

  return (
    <>
      <Nav/>
      <MainTag/>
      <ReserveATable/>
      <Footer/>
    </>
  )
}

export default App
