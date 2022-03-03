import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  margin-top:15px;
`;
const MainHeader = () => {
  return (
    <HeaderContainer>
      <img style={{width:"160px"}}src={'img/logo.png'}></img>
      <div>여기에 다크모드 버튼</div>
    </HeaderContainer>
  );
};

export default MainHeader;