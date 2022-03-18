import type { NextPage } from 'next';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Footer from '../components/Footer';
import RecipeContent from '../components/RecipeContent';
import { FiChevronDown } from 'react-icons/fi';
import React, {useEffect, useState} from 'react';
import Recipe from '../interfaces/RecipeInterface';
import { LOAD_RECIPES_REQUEST } from '../modules/recipe';
import { wrapper } from '../modules/configureStore';
import { END } from 'redux-saga';

const PageContainer = styled.div<{mode: string, fixed: boolean}>`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: ${(props)=>props.fixed ? 'hidden' : 'scroll'};
  bottom: 0;

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
  padding: 5px;
  margin-top: 20px;
  border-radius: 20px;
  background-color: white;
  min-height: 430px;
`;

const FotterContainer = styled.div`
  margin-top: 50px;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const mode: string = useSelector((state: RootState) => state.mode);
  const recipes: Recipe[] = useSelector((state: RootState) => state.recipe.mainRecipes);
  const [fixed, setFixed] = useState(false);
  const [opend, setOpend] = useState(false);

  useEffect(()=>{
    setOpend(false);
  },[])

  const onClickMore = () => {
    setOpend(true);
    dispatch({type: LOAD_RECIPES_REQUEST, data: recipes[recipes.length-1]._id});
  }


  return (
    <PageContainer fixed={fixed} mode={mode}>
      <ComponentContainer><MainHeader /></ComponentContainer>
      <ComponentContainer><SearchInput /></ComponentContainer>
      <ComponentContainer>
        <ContentContainer>
          {recipes.map((v,idx)=>{
            return <RecipeContent key={idx} data={v} fixed={fixed} setFixed={setFixed} />
          })}
        </ContentContainer>
      </ComponentContainer>
      <button onClick={onClickMore}>더보기<FiChevronDown/></button>
      <FotterContainer>
        <p>문의 및 레시피 추가</p>
        <Footer/>
      </FotterContainer>
    </PageContainer>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async() => {
  store.dispatch({type: LOAD_RECIPES_REQUEST});
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
