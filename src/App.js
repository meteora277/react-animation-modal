import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "./Button";
import Login from "./login"

const button = {
  rest: { y: "0px" },
  hover: { y: "-5px" },
  pressed: { y: "0px" }
};

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{

    box-sizing:border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    height:100vh;
    background:grey; 
    display:grid;
    place-items:center;
  }
`;
const Overlay = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  background: #12181b;
  opacity: 0.7;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
`;
const Modal = styled.div`
  
  display:relative;
  height: 30%;
  width: 50%;
  background: #12181b;
  text-align: center;
  font-size:2rem;
  padding: 3rem;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 10px 25px 5px rgb(2,2,3);

   button{
     height:3rem;
     width: 7rem;
     background: white;
     border:none;
   }
`;

function App() {
  const [ModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!ModalOpen);
    console.log(ModalOpen);
  };

  const close = () => setModalOpen(false);
  // const open = () => setModalOpen(true)

  return (
    <div>
      <GlobalStyle />

      {ModalOpen ? null : (
        <motion.div
          variants={button}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
        >
          <Button handleClick={handleClick} />
        </motion.div>
      )}

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {ModalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay>
              <Modal>
                <Login/>
                <motion.button
                  variants={button}
                  initial={button.rest}
                  whileTap={button.pressed}
                  whileHover={button.hover}
                  onClick={() => close()}
                >
                  Login
                </motion.button>
              </Modal>
            </Overlay>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
