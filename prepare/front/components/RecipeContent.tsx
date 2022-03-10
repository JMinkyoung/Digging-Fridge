import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Recipe from '../interfaces/RecipeInterface';
import { FiChevronDown } from 'react-icons/fi';
import Modal from './Modal';

interface Iprops {
  // data: Recipe;
  setFixed: React.Dispatch<React.SetStateAction<boolean>>;
  fixed: boolean;
}

const RecipeContentWrapper = styled.div<{open: boolean}>`
  display: flex;
  height:90px;
  padding: 5px 5px 0 5px;
  border-radius: 20px;
  justify-content: space-between;
  /* background-color: #fed88d; */
  background-color: white;
  transition:  height 0.5s ease;
  margin-bottom: 5px;

`;
const RecipeImgWrapper = styled.div`
  width: 80px;
  height: 80px;
`;
const RecipeInfoWrapper = styled.div`
  position: relative;
  top: 0;
  width: 200px;
  margin-top: 5px;
  margin-left: 5px;
`;

const RecipeTitle = styled.h1`
  font-weight: bolder;
  font-size: 20px;
`;

const RecipeIngredient = styled.div`
  font-size: 13px;
  width: 100%;
  height: 50px;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.2em;
  height: 3.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
`;

const RecipeMore = styled(FiChevronDown)<{open: boolean}>`
  color: grey;
  font-size: 40px;
  margin-top: 20px;
  transform: ${props => props.open ?  'rotate(180deg)' : null};
  transition: transform 0.2s ease 0.2s;
  cursor: pointer;
`;


const RecipeContent = (props: Iprops) => {
  const [open, setOpen] = useState(false);
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

  const onClickMore = () => {
    setOpen(!open);
    props.setFixed(!props.fixed);
  }

  return(
    <RecipeContentWrapper open={open}>
      <RecipeImgWrapper><img style={{width: '100%', height: '100%', borderRadius:'30px'}} src={data.image}/></RecipeImgWrapper>
      <RecipeInfoWrapper>
        <RecipeTitle>{data.title}</RecipeTitle>
        <RecipeIngredient>{data.ingredient.map((v,idx)=>{
          if(idx===data.ingredient.length-1) return v;
          else return v+", "
        })}</RecipeIngredient>
      </RecipeInfoWrapper>
      <RecipeMore open={open} onClick={onClickMore}/>
      {open ? <Modal open={open} setFixed={props.setFixed} setOpen={setOpen}/> : null }
    </RecipeContentWrapper>
  );
};

export default RecipeContent;