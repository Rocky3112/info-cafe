import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Files/Card'
import Blog from './components/Files/Blog'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Question from './components/Files/Question'


function App() {


  return (
    <div className="App">
      <Card></Card>
      <Blog></Blog>
      <ToastContainer />
      <Question></Question>
      
    </div>
  )
}

export default App
