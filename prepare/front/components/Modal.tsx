import React from 'react';
import styled, { keyframes } from 'styled-components';
import Recipe from '../interfaces/RecipeInterface';
import { BsX } from 'react-icons/bs';

interface Iprops {
  // data: Recipe;
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
  height: ${(props)=>props.open? '350px': '0px'};
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
  height: 140px;
  position: fixed;
  padding-top: 10px;
`;

const CloseButton = styled(BsX)`
  position: absolute;
  right: 0px;
  top: 10px;
  color: black;
  font-size: 40px;
  cursor: pointer;
`;

const Modal = (props: Iprops) => {
  const nutriName = {"eng": "열량", "car": "탄수화물", "pro": "단백질", "fat":"지방", "na":"나트륨" };
  const data = {
    "_id":{"$oid":"62205a48fe5e5f3f53dd6506"},
    "title":"칼륨 듬뿍 고구마죽",
    "image":"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_1.png",
    "nutriment":{"eng":"205","car":"35","pro":"3","fat":"6","na":"68"},
    "ingredient":["고구마죽","고구마 100g(2/3개)"," 설탕 2g(1/3작은술)"," 찹쌀가루 3g(2/3작은술)","물 200ml(1컵)"," 잣 8g(8알)"," 찹쌀가루 3g(2/3작은술)","물 200ml(1컵)"," 잣 8g(8알)"],
    "recipe":["1. 고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.a","2. 찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여 잘 으깨어 곱게 만든다.b","3. 고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다.c","4. 잣을 팬에 노릇하게 볶아 다져서 고구마 죽에 섞는다. 기호에 따라 고구마를 튀겨 얹어 먹어도 좋다."],
    "ingredientKey":"고구마죽고구마개설탕작은술찹쌀가루작은술물컵잣알",
    "type":"후식"
  };

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
        <img style={{width: '100px', height: '100px', borderRadius:'30px'}} src={data.image}/>
        <span>{data.title}</span>
        <ul>
          {Object.keys(data.nutriment).map((key: string, index: number) => 
          <li style={{float:'left', marginLeft: '5px'}}key={index}> <span style={{fontWeight: 'bolder'}}>{nutriName[key]}</span> {data.nutriment[key]}</li>)}
        </ul>
        <br/>
      <hr/>
      <CloseButton onClick={closeModal}/>

      </ModalTopInfo>
      <div style={{paddingTop: "150px"}}>
        <ul>
          {data.recipe.map((v: string, index: number)=>
              <li style={{fontSize: '19px'}} key={index}>{v.replace(/[a-z]$/, "")}</li>)}
        </ul>
      </div>
    </ModalContent>
    </ModalWrapper>
   </>
  );
};

export default Modal;