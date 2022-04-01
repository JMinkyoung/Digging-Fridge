import React from 'react';
import styled from 'styled-components';

const MobileWarnWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--maingreen);
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;

`;

const MobileWarnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--mainyellow);
`;

const MobileWarn = () => {
  return (
    <MobileWarnWrapper>
      <MobileWarnContent>
          <h1 style={{fontSize: '30px', fontWeight: 'bolder'}}>PC 환경은 지원하지 않는 사이트 입니다 😓</h1>
          <span style={{fontSize: '25px', fontWeight: 'bolder', marginTop: '20px'}}>Mobile 환경으로 접속해주세요🙇‍♀️</span>
      </MobileWarnContent>
    </MobileWarnWrapper>

  );
};

export default MobileWarn;