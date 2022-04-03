import React from 'react';
import styled from 'styled-components';

interface Iprops {
  mode: string;
}

const FooterWrapper = styled.div<{mode: string}>`
  background-color: ${props => props.mode === 'light' ? "rgb(230, 232, 234)": "#2a2a30"};
  width:100%;
  height:auto; 
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
  margin-top: 10px;
`;
const Footer = (props: Iprops) => {
  return(
    <FooterWrapper mode={props.mode}>
      <p>본 사이트는 만개의 레시피, 식품의약품안전처의 open API인 조리식품의 레시피 DB를 활용한 사이트 입니다.</p>
      <p>자세한 레시피는 해당 사이트를 확인해주세요.</p>
      <p style={{fontWeight: 'bolder', marginTop:'5px'}}>by. 냉장고 파먹기</p>
    </FooterWrapper>
  )
};

export default Footer;