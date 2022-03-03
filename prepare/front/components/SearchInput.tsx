import React, {useState} from 'react';
import styled from 'styled-components';
import {AiFillCloseCircle} from 'react-icons/ai';

const InputContainer = styled.div`
  padding: 3px 0 5px 0;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const InputWrapper = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
  padding: 3px 0 3px 0;
`;
const InputTag = styled.li`
  background-color: var(--maingreen);
  height: 30px;
  font-size: 15px;
  color: #ffff;
  display: flex;
  align-items: center;
  list-style: none;
  border-radius: 10px;
  margin: 2px 0 0 3px;
  padding: 0 5px 0 5px;
`;
const SearchInput = () => {
  const [tags, setTags] = useState<string[]>([]);

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

  return (
    <InputContainer>
      <InputWrapper>
        {tags.map((tag, idx)=>(
          <InputTag key={tag}>
            {tag}
            <AiFillCloseCircle style={{marginLeft: "3px", fontSize: '15px', cursor:'pointer'}} onClick={()=>{removeTag(idx)}}/>
          </InputTag>
        ))}
        <input style={{fontSize: '16px', width: '150px', height:'30px', lineHeight: '30px', margin:'2px 0 0 5px'}}type="text" placeholder='재료를 입력하세요' onKeyDown={inputKeyDown} />
      </InputWrapper>
    </InputContainer>
  );
};

export default SearchInput;