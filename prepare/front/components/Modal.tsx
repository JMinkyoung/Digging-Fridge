import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BsX } from 'react-icons/bs';

interface Iprops {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

const slideUp = keyframes`
  from{
    transform: translateY(100%);
  }to{
    transform: translateY(0%);
  }
`;

const ModalWrapper = styled.div<{open:boolean}>`
  width: 100%;
  height: ${(props)=>props.open? '500px': '0px'};
  position:fixed;
  background-color: white;
  bottom: 0;
  left: 0;
  z-index: 2;
  animation-duration: 0.5s;
  animation-name: ${slideUp};
  transition: all 0.5s ease-in-out;
  border-radius: 15px 15px 0 0;
`;

const ModalContent = styled.div`
  flex-direction: column;
  /* position: relative; */
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  overflow: scroll;
  /* z-index: 100; */

  border-radius: 6px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const BackWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;
  overflow: hidden;
`;

const CloseButton = styled(BsX)`
  position: absolute;
  right: 10px;
  top: 10px;
  color: black;
  font-size: 40px;
`;

const Modal = (props: Iprops) => {
  const closeModal = (e: any) => {
    props.setOpen(false);
    props.setFixed(false);
  }
  return (
    <>
    <BackWrapper onClick={closeModal}/>
    <ModalWrapper open={props.open}>
    <ModalContent>
      <CloseButton onClick={closeModal}/>
    </ModalContent>
    </ModalWrapper>
   </>
  );
};

export default Modal;