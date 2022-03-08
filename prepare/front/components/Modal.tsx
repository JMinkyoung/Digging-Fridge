import React from 'react';
import styled from 'styled-components';

interface Iprops {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled.div`
  width: 100%;
  height:400px;
  position:relative;
  overflow-y: scroll;
  background-color: red;
  bottom: 0;    
  z-index: 600;
`;

const BackWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
`;



const Modal = (props: Iprops) => {
  const closeModal = () => {
    props.setOpen(false);
    console.log("here");
  }
  return (
    <BackWrapper onClick={closeModal}>
      <ModalWrapper>
sdds
      </ModalWrapper>
    </BackWrapper>
  );
};

export default Modal;