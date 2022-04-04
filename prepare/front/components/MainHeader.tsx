import React from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';
import ColorMode from './ColorMode';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:15px;
`;
const MainHeader = () => {
  const router = useRouter();
  return (
    <HeaderContainer>
        <img onClick={()=>router.reload()}style={{width:"170px", cursor:'pointer'}}src={'img/logo.png'}/>
      <ColorMode />
    </HeaderContainer>
  );
};

export default MainHeader;