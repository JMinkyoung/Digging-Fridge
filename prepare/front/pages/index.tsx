import type { NextPage } from 'next';
import { Main } from 'next/document';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
const PageContainer = styled.div`

  @media ${(props) => props.theme.mobile} {

  }
`;

const ComponentContainer = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 0px 20px;
  max-width: 767px;
`;
const Home: NextPage = () => {
  return (
    <PageContainer>
      <ComponentContainer><MainHeader /></ComponentContainer>
      <ComponentContainer><SearchInput /></ComponentContainer>
    </PageContainer>
  )
}

export default Home;
