import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Recipe from '../interfaces/RecipeInterface';
import { FiChevronDown } from 'react-icons/fi';
import Modal from './Modal';

interface Iprops {
  data: Recipe;
  setFixed: React.Dispatch<React.SetStateAction<boolean>>;
  fixed: boolean;
}

const RecipeContentWrapper = styled.div<{open: boolean}>`
  display: flex;
  height:90px;
  padding: 5px 5px 0 5px;
  border-radius: 20px;
  justify-content: space-between;
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

const RecipeTitle = styled.h1<{len: number}>`
  font-weight: bolder;
  font-size: ${props => props.len>10 ?  '15px' : '17px'};;
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
  transition: transform 0.1s ease 0.1s;
  cursor: pointer;
`;


const RecipeContent = (props: Iprops) => {
  const [open, setOpen] = useState(false);

  const onClickMore = () => {
    setOpen(!open);
    props.setFixed(!props.fixed);
  }

  return(
    <RecipeContentWrapper open={open}>
      <RecipeImgWrapper><img style={{width: '100%', height: '100%', borderRadius:'30px'}} src={props.data.image}/></RecipeImgWrapper>
      <RecipeInfoWrapper>
        <RecipeTitle len={props.data.title.length}>{props.data.title}</RecipeTitle>
        <RecipeIngredient>{props.data.ingredient.map((v,idx)=>{
          if(idx===props.data.ingredient.length-1) return v;
          else return v+", "
        })}</RecipeIngredient>
      </RecipeInfoWrapper>
      <RecipeMore open={open} onClick={onClickMore}/>
      {open ? <Modal data={props.data} open={open} setFixed={props.setFixed} setOpen={setOpen}/> : null }
    </RecipeContentWrapper>
  );
};

export default RecipeContent;