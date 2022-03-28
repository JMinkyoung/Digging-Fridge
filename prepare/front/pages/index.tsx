import type { NextPage } from 'next';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Footer from '../components/Footer';
import RecipeContent from '../components/RecipeContent';
import { FiChevronDown } from 'react-icons/fi';
import React, {useEffect, useState, useRef} from 'react';
import { Recipe } from '../interface';
import { LOAD_RECIPES_REQUEST, LOAD_MORE_TAG_RECIPES_REQUEST } from '../modules/recipe';
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

const MoreButtonWrapper = styled.div<{opend: boolean}>`
  display:  ${props => props.opend ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
`;

const MoreButton = styled.div`
  color: var(--mainyellow);
  border: 1px solid var(--maingreen);
  border-radius: 8px;
  padding: 3px ;
  background-color:var(--maingreen);
  font-weight: bolder;
`;
const FotterContainer = styled.div`
  margin-top: 50px;
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const contentRef = useRef() as any;
  const pageRef = useRef() as any;

  const mode: string = useSelector((state: RootState) => state.mode);
  const recipes: Recipe[] = useSelector((state: RootState) => state.recipe.mainRecipes);
  const tagrecipes: Recipe[] = useSelector((state: RootState) => state.recipe.tagRecipes);
  const tags: string[] = useSelector((state: RootState) => state.tag.tags);

  const loadRecipesLoading: boolean = useSelector((state: RootState) => state.recipe.loadRecipesLoading);
  const loadTagRecipesLoading: boolean = useSelector((state: RootState) => state.recipe.loadTagRecipesLoading);

  const loadTagRecipesDone: boolean = useSelector((state: RootState) => state.recipe.loadTagRecipesDone);


  const [fixed, setFixed] = useState(false);
  const [opend, setOpend] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(()=>{
    setOpend(false);
  },[]);

  const updateScrollTop = () => {
    setScrollTop(pageRef.current.scrollTop); 
  }

  useEffect(() => { // 렌더링 될때마다 scrollTop 업데이트
    const watch = () => {
      pageRef.current.addEventListener('scroll', updateScrollTop);
    }
    watch(); 
    return () => {
      pageRef.current.removeEventListener('scroll', updateScrollTop); 
    }
  });

  useEffect(()=>{  
    const onScroll = () => {
        if(contentRef.current.clientHeight/3 < scrollTop) {
            if(!loadRecipesLoading && tagrecipes.length===0 ){  // 일반 레시피 더 불러오기
              dispatch({type: LOAD_RECIPES_REQUEST, data: recipes[recipes.length-1]._id});
            }else if(!loadTagRecipesLoading && tagrecipes.length!==0){  // 태그 레시피 더 불러오기
              dispatch({type: LOAD_MORE_TAG_RECIPES_REQUEST, data: {tags, lastId: tagrecipes[tagrecipes.length-1]._id}});
            }
        }
    }
    pageRef.current.addEventListener('scroll',onScroll);
    return () => {
      pageRef.current.removeEventListener('scroll', onScroll);
    }
  },[loadRecipesLoading, recipes, scrollTop]);

  const onClickMore = () => {
    setOpend(true);
    dispatch({type: LOAD_RECIPES_REQUEST, data: recipes[recipes.length-1]._id});
  }


  return (
    <PageContainer fixed={fixed} mode={mode} ref={pageRef}>
      <ComponentContainer><MainHeader /></ComponentContainer>
      <ComponentContainer><SearchInput /></ComponentContainer>
      <ComponentContainer>
        <ContentContainer ref={contentRef}>
          
          {/* 1. 완전 처음인 경우 */}
          {tags.length===0 && !loadTagRecipesDone && 
            recipes.map((v,idx)=>{
              return <RecipeContent key={idx} data={v} fixed={fixed} setFixed={setFixed} />})
          }
          {/* 2. 검색했는데 결과가 있는 경우 */}
          {tags.length !==0 && tagrecipes.length ? 
             tagrecipes.map((v,idx)=>{
              return <RecipeContent key={idx} data={v} fixed={fixed} setFixed={setFixed} />}) : loadTagRecipesDone && <h1>레시피가 없습니다</h1>}

        </ContentContainer>
      </ComponentContainer>
      <MoreButtonWrapper opend={opend} onClick={onClickMore}>
        <MoreButton>
          <span>더보기</span> <FiChevronDown/>
        </MoreButton>
      </MoreButtonWrapper>
      <FotterContainer>
        <p>문의 및 레시피 추가</p>
        <Footer/>
      </FotterContainer>
    </PageContainer>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async() => {
  store.dispatch({type: LOAD_RECIPES_REQUEST});
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
