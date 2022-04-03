import type { NextPage } from 'next';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import Footer from '../components/Footer';
import RecipeContent from '../components/RecipeContent';
import AskButton from '../components/AskButton';
import { FiChevronDown } from 'react-icons/fi';
import React, {useEffect, useState, useRef} from 'react';
import { Recipe } from '../interface';
import { LOAD_RECIPES_REQUEST, LOAD_MORE_TAG_RECIPES_REQUEST } from '../modules/recipe';
import { wrapper } from '../modules/configureStore';
import { END } from 'redux-saga';
import MobileWarn from '../components/MobileWarn';
import { useIsMobile } from '../components/useIsMobile';
import EmptyRecipe from '../components/EmptyRecipe';

const PageContainer = styled.div<{mode: string, fixed: boolean}>`
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: ${(props)=>props.fixed ? 'hidden' : 'scroll'};
  bottom: 0;

  background-color:${props => props.mode === "light" ? `var(--lightbackcolor)` : `var(--darkbackcolor)`};
  color: ${props => props.mode === "light" ?  `var(--darkcolor)` : `var(--lightcolor)`};
`;

const ComponentContainer = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 0px 20px;
  max-width: 767px;
`;

const ContentContainer = styled.div<{mode: string}>`
  height: 100%;
  padding: 5px;
  margin-top: 20px;
  border-radius: 20px;
  background-color:${props => props.mode === "light" ? `white` : `#2a2a30`};
  min-height: 430px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
  border-radius: 10px;
  padding: 3px 0px 8px 8px ;
  background-color:var(--maingreen);
  font-size: 15px;
  font-weight: bolder;
`;
const FotterContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
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

  const isMobile = useIsMobile();
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
    if(isMobile){
      const watch = () => {
        pageRef.current.addEventListener('scroll', updateScrollTop);
      }
      watch(); 
      // return () => {
      //   pageRef.current.removeEventListener('scroll', updateScrollTop); 
      // }
    }
  });

  useEffect(()=>{  
    if(isMobile){
        const onScroll = () => {
          if(contentRef.current.clientHeight/3 < scrollTop) {
              if(!loadRecipesLoading && tagrecipes.length===0 && opend){  // 일반 레시피 더 불러오기
                dispatch({type: LOAD_RECIPES_REQUEST, data: recipes[recipes.length-1]._id});
              }else if(!loadTagRecipesLoading && tagrecipes.length!==0){  // 태그 레시피 더 불러오기
                dispatch({type: LOAD_MORE_TAG_RECIPES_REQUEST, data: {tags, lastId: tagrecipes[tagrecipes.length-1]._id}});
              }
          }
      }
      pageRef.current.addEventListener('scroll',onScroll);
      // return () => {
      //   pageRef.current.removeEventListener('scroll', onScroll);
      // }
    }
  },[loadRecipesLoading, recipes, scrollTop]);

  const onClickMore = () => {
    setOpend(true);
    dispatch({type: LOAD_RECIPES_REQUEST, data: recipes[recipes.length-1]._id});
  }


  return (
  <>
  {isMobile ? 
  <PageContainer fixed={fixed} mode={mode} ref={pageRef}>
  <ComponentContainer><MainHeader /></ComponentContainer>
  <ComponentContainer><SearchInput /></ComponentContainer>
  <ComponentContainer>
    <ContentContainer mode={mode} ref={contentRef}>
      {/* 1. 완전 처음인 경우 */}
      {tags.length===0 && !loadTagRecipesDone && 
        recipes.map((v,idx)=>{
          return <RecipeContent key={idx} data={v} fixed={fixed} setFixed={setFixed} />})
      }
      {/* 2. 검색했는데 결과가 있는 경우 */}
      {tags.length !==0 && tagrecipes.length ? 
         tagrecipes.map((v,idx)=>{
          return <RecipeContent key={idx} data={v} fixed={fixed} setFixed={setFixed} />}) : loadTagRecipesDone && <EmptyRecipe/>}

    </ContentContainer>
  </ComponentContainer>
  {tagrecipes.length == 0 &&
        <MoreButtonWrapper opend={opend} onClick={onClickMore}>
        <MoreButton>
          <span>더보기</span>
          <FiChevronDown style={{paddingTop: '8px', fontSize: '20px', fontWeight: 'bolder'}}/>
        </MoreButton>
      </MoreButtonWrapper>
  }
  <FotterContainer>
    <p>문의사항이 있거나 새로운 레시피를 추가하고 싶으신 경우</p>
    <AskButton title={"문의사항 및 레시피 추가"} url={"https://www.youtube.com/watch?v=qrshRevYiiA"} />
    <Footer mode={mode}/>
  </FotterContainer>
</PageContainer> :
<MobileWarn/>}
  </>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async() => {
  store.dispatch({type: LOAD_RECIPES_REQUEST});
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Home;
