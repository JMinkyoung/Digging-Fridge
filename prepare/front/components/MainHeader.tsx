import React from 'react';
import styled from 'styled-components';
import ColorMode from './ColorMode';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:15px;
`;
const MainHeader = () => {
  return (
    <HeaderContainer>
      <img style={{width:"170px"}}src={'img/logo.png'}></img>
      <ColorMode />
    </HeaderContainer>
  );
};

export default MainHeader;