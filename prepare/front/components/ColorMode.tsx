import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MdDarkMode, MdOutlineLightMode} from "react-icons/md";
import { RootState } from '../modules';
import { toggle } from '../modules/mode';

const ColorModeContainer = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

const ColorMode = () => {
  const dispatch = useDispatch();
  const mode: string = useSelector((state: RootState) => state.mode);
  const onClickToggle = (e: any) => {
    e.preventDefault();
    dispatch(toggle());
  }

  return (
    <ColorModeContainer>
        {mode === "light" ? <MdDarkMode onClick={onClickToggle} /> : <MdOutlineLightMode onClick={onClickToggle}/>}
    </ColorModeContainer>
  )
};
export default ColorMode;