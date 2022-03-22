import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Recipe } from '../interface';
import { BsX } from 'react-icons/bs';

interface Iprops {
  data: Recipe;
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
  height: ${(props)=>props.open? '450px': '0px'};
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
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  overflow: scroll;
  border-radius: 6px;
  padding: 0px 10px 0 10px;
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

const ModalTopInfo = styled.div`
  background-color: white;
  width:95%;
  height: 180px;
  position: fixed;
  padding-top: 10px;
  border-radius: 6px 6px 0 0 ;
  border-bottom: 2px solid black ;

`;

const ModalTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  left: 110px;
`;

const ModalSubTitle = styled.span`
  font-size: 16px;
  color: rgb(97, 96, 96);
  margin-bottom: 3px;
`;

const ModalTitle = styled.span`
  font-size: 25px;
  font-weight: bolder;
`;

const CloseButton = styled(BsX)`
  position: absolute;
  right: 0px;
  top: 0px;
  color: black;
  font-size: 40px;
  cursor: pointer;
`;

const ModalNutrimentWrapper = styled.ul`
  margin-top: 40px;
  font-size: 14px;
`;

const ModalIngredientWrapper = styled.div`
  position: absolute;
  padding: 3px;
  border-radius: 6px;
  left: 110px;  
  top: 80px;
  width: 70%;
  height: 60px;
  line-height: 120%;
  background-color: whitesmoke;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ModalRecipeWrapper = styled.div`
  padding-top: 190px;
  line-height: 150%;
`;
const Modal = (props: Iprops) => {
  const nutriName = {"eng": "열량", "car": "탄수화물", "pro": "단백질", "fat":"지방", "na":"나트륨" };

  const closeModal = (e: any) => {
    props.setOpen(false);
    props.setFixed(false);
  }
  return (
    <>
    <BackWrapper onClick={closeModal}/>
    <ModalWrapper open={props.open}>
    <ModalContent>
      <ModalTopInfo>
        <img style={{width: '100px', height: '100px', borderRadius:'30px'}} src={props.data.image}/>
        <ModalTitleWrapper>
          <ModalSubTitle>{props.data.type}</ModalSubTitle>
          <ModalTitle>{props.data.title}</ModalTitle>
        </ModalTitleWrapper>
        <ModalIngredientWrapper>
          <ul>
            {props.data.ingredient.map((v: string, index: number)=>
                index === props.data.ingredient.length-1 ? <li style={{fontSize: '15px', float: 'left'}} key={index}>{v}&nbsp;</li> :
                <li style={{fontSize: '15px', float: 'left'}} key={index}>{v+","}&nbsp;</li>)}
          </ul>
        </ModalIngredientWrapper>
        <ModalNutrimentWrapper>
          {props.data.nutriment &&
          Object.keys(props.data.nutriment).map((key: string, index: number) => 
          <li style={{float:'left', marginLeft: '8px'}}key={index}> <span style={{fontWeight: 'bolder'}}>{nutriName[key]}</span> {props.data.nutriment && props.data.nutriment[key]}</li>)
          }
        </ModalNutrimentWrapper>
        <CloseButton onClick={closeModal}/>
      </ModalTopInfo>
      <ModalRecipeWrapper>
        <ul>
          {props.data.recipe.map((v: string, index: number)=>
              <li style={{fontSize: '16px', marginBottom: '10px'}} key={index}><span style={{fontWeight:'bolder'}}>{index+1+"."}</span>{v.replace(/^[0-9]+./, "").replace(/[a-z]$/, "")}</li>)}
        </ul>
      </ModalRecipeWrapper>
    </ModalContent>
    </ModalWrapper>
   </>
  );
};

export default Modal;