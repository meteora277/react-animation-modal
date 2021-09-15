import "./App.css";
import styled, { createGlobalStyle, css } from "styled-components";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "./Button";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.3 },
  pressed: { scale: 1.2 }
};

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{

    box-sizing:border-box;
  }

  body{
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
  background: black;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Modal = styled.div`.

  width: 60%;
  height:40%;
  background: lightblue;
  text-align: center;
  font-size:2rem;
  padding: 3rem;
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
        onExitComplete ={()=> null}
      >
        {ModalOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Overlay>
              <Modal>
                <div>
                  Hello there i am a modal and i would like to interest you in
                  accepting our sites cookies, thanks{" "}
                </div>
                <motion.button
                  variants={button}
                  initial={button.rest}
                  whileTap={button.pressed}
                  whileHover={button.hover}
                  onClick={() => close()}
                >
                  owo
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
