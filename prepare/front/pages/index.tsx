import type { NextPage } from 'next';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Footer from '../components/Footer';
import RecipeContent from '../components/RecipeContent';

const PageContainer = styled.div<{mode: string}>`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;

  background-color:${props => props.mode === "light" ? `var(--lightbackcolor)` : `var(--darkbackcolor)`};
  color: ${props => props.mode === "light" ?  `var(--darkcolor)` : `var(--lightcolor)`};

  @media ${(props) => props.theme.mobile} {

  }
`;

const ComponentContainer = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 0px 20px;
  max-width: 767px;
`;

const ContentContainer = styled.div`
  margin-top: 20px;
  border-radius: 20px;
  background-color: var(--lightcolor);
  min-height: 430px;
`;

const FotterContainer = styled.div`
  margin-top: 50px;
`;

const Home: NextPage = () => {
  const mode: string = useSelector((state: RootState) => state.mode);

  return (
    <PageContainer mode={mode}>
      <ComponentContainer><MainHeader /></ComponentContainer>
      <ComponentContainer><SearchInput /></ComponentContainer>
      <ComponentContainer>
        <ContentContainer>
          <RecipeContent />
        </ContentContainer>
      </ComponentContainer>
      <FotterContainer>
        <p>문의 및 레시피 추가</p>
        <Footer/>
      </FotterContainer>
    </PageContainer>
  )
}

export default Home;
