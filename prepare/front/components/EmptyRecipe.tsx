import styled from 'styled-components';

const EmptyRecipeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--mainyellow);
`;

const EmptyRecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyRecipe = () => {
  return(
    <EmptyRecipeWrapper>
      <EmptyRecipeContent>
        <h1>레시피가 없습니다 😥</h1>
      </EmptyRecipeContent>
    </EmptyRecipeWrapper>
  );
}

export default EmptyRecipe;