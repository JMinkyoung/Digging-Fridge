import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../modules';

const EmptyRecipeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const EmptyRecipeContent = styled.span<{mode: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top : 50%;
  font-size: 25px;
  font-weight: bolder;
  color: ${props => props.mode === 'light' ? `var(--maingreen)`: `var(--mainyellow)`};
`;
const EmptyRecipe = () => {

  const mode: string = useSelector((state: RootState) => state.mode);

  return(
    <EmptyRecipeWrapper>
      <EmptyRecipeContent mode={mode}>
        레시피가 없습니다 😥
      </EmptyRecipeContent>
    </EmptyRecipeWrapper>
  );
}

export default EmptyRecipe;