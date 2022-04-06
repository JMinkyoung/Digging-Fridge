![image](https://user-images.githubusercontent.com/37430920/161924327-1b78902b-24c5-4169-903b-153d1cbaa892.png)

# 냉장고 파먹기 (Digging Fridge) 
> 냉장고에 남은 재료로 뭘 만들어 먹을 수 있을까?

[![Build Status][travis-image]][travis-url]


냉장고, 혹은 집에 **남아있는 식재료**로를 입력하면 해당 식재료들로 **만들 수 있는 요리 레시피**와<br/>
해당 요리를 만들기 위해 필요한 **나머지 재료**들을 알려주는 모바일 웹사이트 입니다.

## 실제 배포 사이트
http://diggingfridge.shop


## 설치 및 실행방법

**Client**
```sh
npm i
npm build
npm start
```

**Server(MongoDB 연결시 가능)**
```sh
npm i
npm start
```

## 사용 예제
<img src="https://user-images.githubusercontent.com/37430920/161926357-a056c02c-f8d6-422c-ac03-d0c42253c6ee.gif" width="300" height="auto"/><br/>
- 우측 상단 토글 버튼을 클릭 시 dark mode 사용이 가능합니다.

<img src="https://user-images.githubusercontent.com/37430920/161925267-9ad5a40f-f8ba-4cfe-87a3-0b5103dd422e.gif" width="300" height="auto"/><br/>
- 남은 재료를 입력시, 해당 재료로 만들 수 있는 레시피 목록을 보여줍니다.
- 재료를 여러개 입력하면 입력된 재료들이 전부 포함되는 레시피를 보여줍니다.

<img src="https://user-images.githubusercontent.com/37430920/161927323-ef8d5df6-b436-479d-8a0a-3a96e4b1baec.gif" width="300" height="auto"/><br/>
- 레시피를 클릭시 자세한 정보를 Modal을 통해 제공합니다.

<div style={display:'flex'}>
   <img src="https://user-images.githubusercontent.com/37430920/161928613-8a321503-4009-45d6-8cbd-fed945d33e5c.gif" width="300" height="auto"/>
   <img src="https://user-images.githubusercontent.com/37430920/161928990-5dcf3e22-90cb-45b2-b48f-07fa485899de.gif" width="300" height="auto"/>
</div><br/>

- 무한 스크롤을 지원합니다.

## 사용 기술

### Frontend
[![TS](https://img.shields.io/badge/TypeScript-4.6.2-3178C6?logo=TypeScript)]()
[![React](https://img.shields.io/badge/React-17.0.2-blue?logo=React)]()
[![Next.js](https://img.shields.io/badge/Next.js-12.1.0-white?&logo=Next.js&logoColor=white)]()<br/>
[![Redux](https://img.shields.io/badge/Redux-4.1.2-764ABC?logo=Redux&logoColor=764ABC)]()
[![Redux-Saga](https://img.shields.io/badge/Redux_Saga-1.1.3-999999?logo=Redux-Saga&logoColor=999999)]()
[![styled-components](https://img.shields.io/badge/styled_components-5.3.3-DB7093?&logo=styled-components&logoColor=DB7093)]()

### Backend
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white)]()
[![Express](https://img.shields.io/badge/Express-4.17.3-000000?logo=Express)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=MongoDB&logoColor=white)]()
[![Python](https://img.shields.io/badge/Python-3.8.3-3776AB?logo=Python)]()

### 배포
[![Amazon-AWS](https://img.shields.io/badge/Amazon_AWS-232F3E?logo=Amazon-AWS)]()

## 업데이트 내역
* 0.1.0
    * 첫 출시
* 0.0.1
    * 작업 진행 중

## 정보

<!-- 이름 – [@트위터 주소](https://twitter.com/dbader_org) – 이메일주소@example.com
 -->
MIT 라이센스를 준수하며 ``LICENSE``에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/JMinkyoung/Digging-Fridge/blob/main/LICENSE](https://github.com/JMinkyoung/Digging-Fridge/blob/main/LICENSE)

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
