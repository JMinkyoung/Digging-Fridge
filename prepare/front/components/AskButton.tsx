import React from 'react';
import styled from 'styled-components';

interface Iprops {
    title: string;
    url: string;
}

const AskButtonWrapper = styled.a`
  font-size: 15px;  
  font-weight: bolder;
  color: var(--mainyellow);
  margin-top: 10px;
  padding: 10px;
  background-color: var(--maingreen);
  border-radius: 10px;
`;

const AskButton = (props: Iprops) => {
    return(
        <AskButtonWrapper target="_blank" href={props.url}>
            {props.title}
        </AskButtonWrapper>
    );
}

export default AskButton;