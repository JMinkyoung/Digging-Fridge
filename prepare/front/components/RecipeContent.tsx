import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Recipe from '../interfaces/RecipeInterface';

interface Iprops {
  data: Recipe;
  opened: boolean;
}

const RecipeContentWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  background-color: red;
`;

const RecipeContent = () => {
  const data = {
                "_id":{"$oid":"62205a48fe5e5f3f53dd6506"},
                "title":"칼륨 듬뿍 고구마죽",
                "image":"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_1.png",
                "nutriment":{"eng":"205","car":"35","pro":"3","fat":"6","na":"68"},
                "ingredient":["고구마죽","고구마 100g(2/3개)"," 설탕 2g(1/3작은술)"," 찹쌀가루 3g(2/3작은술)","물 200ml(1컵)"," 잣 8g(8알)"],
                "recipe":["1. 고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.a","2. 찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여 잘 으깨어 곱게 만든다.b","3. 고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다.c","4. 잣을 팬에 노릇하게 볶아 다져서 고구마 죽에 섞는다. 기호에 따라 고구마를 튀겨 얹어 먹어도 좋다."],
                "ingredientKey":"고구마죽고구마개설탕작은술찹쌀가루작은술물컵잣알",
                "type":"후식"
              };

  return(
    <RecipeContentWrapper>
      <img style={{width: '60px', height: '60px', borderRadius:'100%'}} src={data.image}/>
      <div>{data.title}</div>
    </RecipeContentWrapper>
  );
};

export default RecipeContent;