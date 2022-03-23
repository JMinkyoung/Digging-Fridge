import React, {useState, useRef, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import {AiFillCloseCircle,} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import SearchButton from './SearchButton';
import { LOAD_TAG_RECIPES_REQUEST } from '../modules/recipe';


const InputContainer = styled.div`
  padding: 3px 0 5px 0;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;
const InputWrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 3px 0 3px 0;
`;
const InputTag = styled.li<{mode: string}>`
  background-color:${props => props.mode === "light" ? `var(--maingreen)` : `var(--lightbackcolor)`};
  color:${props => props.mode === "light" ? '#fff' : `var(--darkcolor)`};
  height: 30px;
  font-size: 15px;
  font-weight: bolder;
  display: flex;
  align-items: center;
  list-style: none;
  border-radius: 10px;
  margin: 2px 0 0 4px;
  padding: 0 5px 0 5px;
`;

const ExtraCount = styled.div<{count: number}>`
  display: ${props => props.count > 3 ? 'block' : 'none'};
  height: 30px;
  line-height: 30px;
  padding: 1px 0 0 5px;
  font-weight: bolder;
`;

const SearchInput = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const mode: string = useSelector((state: RootState) => state.mode);

  const onClickInput = useCallback(()=>{
    if(inputRef.current){
      inputRef.current.focus();
    }
  },[inputRef.current]);


  const inputKeyDown = (e: any) => {
    const val = e.target.value;
    if(e.key === 'Enter' && val){
      if(tags.find(tag => tag.toLowerCase() === val.toLowerCase())){
        return;
      }
      setTags([...tags, val]);
      e.target.value = null;
    }else if(e.key === 'Backspace' && !val){
      removeTag(tags.length-1);
    }
  };

  const removeTag = (idx: number) => {
    const newTags: string[] = [...tags];
    newTags.splice(idx, 1);
    setTags(newTags);
  };

  useEffect(()=>{ // 태그가 추가되거나 삭제 될때마다 API 요청
    console.log(tags);
    dispatch({type: LOAD_TAG_RECIPES_REQUEST, data: tags});
  },[tags]);

  return (
    <InputContainer onClick={onClickInput}>
      <InputWrapper>
        {tags.map((tag, idx)=>(idx < 3 ? <InputTag mode={mode} key={tag}>{tag}<AiFillCloseCircle style={{marginLeft: "3px", fontSize: '15px', cursor:'pointer'}} onClick={()=>{removeTag(idx)}}/></InputTag>:null        ))}
        <ExtraCount count={tags.length}>+{tags.length-3}</ExtraCount>
        <input ref={inputRef} style={{fontSize: '16px', width: '80px', height:'30px', lineHeight: '30px', margin:'2px 0 0 5px'}}type="text" placeholder='재료 입력' onKeyDown={inputKeyDown} />
        <SearchButton />
      </InputWrapper>
    </InputContainer>
  );
};

export default SearchInput;