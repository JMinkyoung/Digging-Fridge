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
      <p>본 사이트는 만개의 레시피, DB의 데이터를 이용한 사이트 입니다.</p>
      <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌</p>

      <p style={{fontWeight: 'bolder'}}>by. 냉장고 파먹기</p>
    </FooterWrapper>
  )
};

export default Footer;