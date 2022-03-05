import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: rgb(230, 232, 234);
  width:100%;
  height:70px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;
const Footer = () => {
  return(
    <FooterWrapper>
      <p>본 사이트는 만개의 레시피, DB의 데이터를 이용한 사이트 입니다.</p>
      <p>냉장고 파먹기</p>
    </FooterWrapper>
  )
};

export default Footer;