import './App.css';
import {createGlobalStyle} from 'styled-components';
import React,{useState} from 'react';
import {motion} from 'framer-motion'


import Button from './Button'

const GlobalStyle = createGlobalStyle`
  body{
    background:black; 
  }
`

function App() {

  const [ModalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setModalOpen(!ModalOpen)
    console.log(ModalOpen)
  }

  // const close = () => setModalOpen(false)
  // const open = () => setModalOpen(true)

  return (
    <div>
      <GlobalStyle/>
      <motion.div><Button handleClick={handleClick}/></motion.div>
    </div>
  );
}

export default App;
