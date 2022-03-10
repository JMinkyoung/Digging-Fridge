import type { NextPage } from 'next';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import SearchInput from '../components/SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';
import Footer from '../components/Footer';
import RecipeContent from '../components/RecipeContent';
import React, {useState} from 'react';
import Recipe from '../interfaces/RecipeInterface';
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
  const mode: string = useSelector((state: RootState) => state.mode);
  const [fixed, setFixed] = useState(false);
  const data: Recipe = {
    // _id:{"$oid":"62205a48fe5e5f3f53dd6506"},
    title:"칼륨 듬뿍 고구마죽",
    image:"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00017_1.png",
    nutriment:{"eng":"205","car":"35","pro":"3","fat":"6","na":"68"},
    ingredient:["고구마죽","고구마 100g(2/3개)"," 설탕 2g(1/3작은술)"," 찹쌀가루 3g(2/3작은술)","물 200ml(1컵)"," 잣 8g(8알)"," 찹쌀가루 3g(2/3작은술)","물 200ml(1컵)"," 잣 8g(8알)"],
    recipe:["1. 고구마는 깨끗이 씻어서 껍질을 벗기고 4cm 정도로 잘라준다.a","2. 찜기에 고구마를 넣고 20~30분 정도 삶아 주고, 블렌더나 체를 이용하여 잘 으깨어 곱게 만든다.b","3. 고구마와 물을 섞어 끓이면서 찹쌀가루로 농도를 맞추고 설탕을 넣어 맛을 낸다.c","4. 잣을 팬에 노릇하게 볶아 다져서 고구마 죽에 섞는다. 기호에 따라 고구마를 튀겨 얹어 먹어도 좋다."],
    ingredientKey:"고구마죽고구마개설탕작은술찹쌀가루작은술물컵잣알",
    type:"후식"
  };
  const data2 = {"_id":{"$oid":"62205a48fe5e5f3f53dd6508"},"title":"오색지라시 스시","image":"http://www.foodsafetykorea.go.kr/uploadimg/cook/10_00009_1.png","nutriment":{"eng":"700","car":"138","pro":"17","fat":"9","na":"75"},"ingredient":["초밥","밥 210g(1공기)","배합초","식초 20g(1⅓큰술)"," 설탕 10g(2작은술)"," 소금 약간","오색지라시","달걀노른자 40g(달걀2개)"," 표고버섯 10g(1장)"," 새송이버섯 20g(3개)"," 새우 25g(4마리)"," 홍피망 10g(1/8개)"," 청피망 10g(1/8개)"," 양파 5g(5×1cm)"," 대두유 20g(1⅓큰술)"," 참기름 10g(2작은술)"," 식용유 약간"],"recipe":["1. 배합초는 중불에서 설탕이 녹을 때까지 저어가면서 녹인다.","2. 뜨거운 밥에 배합초를 넣어서 밥알이 으깨지지 않게 고루 저어가면서 밥을 체온 정도로 식힌다.a","3. 표고버섯은 기둥을 떼고 끓는 물에 데친 후 찬물에 헹궈 물기를 없애고 얇게 썰어 달궈진 팬에 참기름을 두르고 볶는다.","4. 새송이버섯은 세로로 얇게 썰어 달궈진 팬에 참기름을 두르고 볶는다.b","5. 달걀노른자를 고루 풀어 약한 불에 지단을 부친 후 채썬다.","6. 청피망과 홍피망은 채를 썬후 달궈진 팬에 기름을 두르고 볶는다.","7. 양파는 채를 썰어 찬물에 담가 매운맛을 제거한 뒤 달궈진 팬에 기름을 두르고 살짝 볶는다.","8. 새우는 껍질을 벗기고 등쪽 2~3마디에 있는 내장을 꼬챙이로 꺼내고 물에 헹궈 물기를 뺀 다음 기름을 두르고 볶는다.","9. 초밥 위에 청피망, 홍피망, 양파, 달걀노른자, 새송이버섯, 표고버섯, 새우를 가지런히 놓는다.c"],"ingredientKey":"초밥밥공기배합초식초⅓큰술설탕작은술소금약간오색지라시달걀노른자달걀개표고버섯장새송이버섯개새우마리홍피망개청피망개양파×대두유⅓큰술참기름작은술식용유약간","type":"밥"}


  return (
    <PageContainer fixed={fixed} mode={mode}>
      <ComponentContainer><MainHeader /></ComponentContainer>
      <ComponentContainer><SearchInput /></ComponentContainer>
      <ComponentContainer>
        <ContentContainer>
          <RecipeContent data={data} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data2} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data2} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data2} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data} fixed={fixed} setFixed={setFixed} />
          <RecipeContent data={data2} fixed={fixed} setFixed={setFixed} />
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
