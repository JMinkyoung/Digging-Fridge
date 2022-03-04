import React from 'react';
import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';

const SearchButtonWrapper = styled.div`
  margin-left:auto;
  font-size:25px;
  margin-right: 8px;
  margin-top:4px;
  cursor: pointer;
`;

const SearchButton = () => {
  return(
    <SearchButtonWrapper>
      <AiOutlineSearch />
    </SearchButtonWrapper>
  );
};
export default SearchButton;