<div align="center"> <h1> ❔질문에 대한 응답을 바탕으로 식사 메뉴를 추천해주는 웹 서비스❕</h1> <br>
<!-- <img src="/logo-wanna-try-this-white.png" width="50%" height="50%"> <br> <br> -->
<h2> [이거머글랭?]</h2> </div>
<br>
<br>

## 1. 기획 의도 & 목적

> ### 🤔"오늘은 뭐 먹지?" <br>
>
> 매일 하게 되는 메뉴 고민! <br>
> 식사 시간마다 무엇을 먹을지 고민스러운 분들에게 조금이나마 선택지를 좁혀드리고자 만든 웹서비스입니다.

<br>

## 2. 웹 서비스의 주제 및, 최종적인 메인 기능과 서브 기능 설명

### ✨ 주제:

- **메인 기능**
  1.  질문을 통한 메뉴추천
  2.  로그인 하고 추천 받은 음식을 저장하면 마이페이지에서 그동안 추천받은 음식의 통계 확인
  3.  소셜 로그인
  ***
- **리팩토링**
  1.  추천받은 음식 공유
  2.  마이페이지
  3.  무한 스크롤

<br>

## 3. 프로젝트만의 차별점, 기대 효과


  우리의 뇌는 사소한 의사결정을 할 때에도 에너지를 마구마구 쓴다고 합니다. <br>
  사용자의 기분, 선호하는 식재료, 나이 그리고 예산에 맞춰 메뉴를 데이터에서 분류하여 사용자에게 음식메뉴를 제안하는 서비스입니다.


<br>
<br>

## 4. 프로젝트 구성

### 🔧 사용 스택

- **프론트엔드** <br>
1.React
2.Styled-components


  

- **백엔드** <br>
1.Node.js
2.Express
3.MongoDB
4.JEST


  <br>
  <br>

### 🎨 기획

- **스토리보드 및 유저 시나리오**
  - 사용자는 홈 화면에서 골라볼래? 버튼을 클릭하면 모든 음식 데이터를 확인할 수 있다.
  - 사용자는 홈 화면에서 골라줄게! 버튼을 클릭하면 질문 페이지로 이동한다
  - 사용자는 질문들에 대한 답을 고르면 결과 화면에서 그에 맞춰 음식을 추천받을 수 있다
  - 사용자는 추천받은 음식을 SNS에 공유하기 버튼을 클릭하여 링크를 공유할 수 있다.
  - 사용자는 홈 화면에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 홈 화면에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 질문 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 질문 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 결과 페이지에서 로그인 버튼을 눌러 로그인 할 수 있다.
  - 사용자는 결과 페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 로그아웃 버튼을 눌러 로그아웃 할 수 있다.
  - 사용자는 마이페이지에서 닉네임을 변경할 수 있다.
  - 사용자는 마이페이지에서 지금까지 추천받은 음식에 대한 통계 데이터를 확인할 수 있다.
  <br>
  <br>
<!-- - **포스트맨** <br>
[<img src="/uploads/d7d75ce5ffc1cf0098d2bf5c05ec65bb/image.png" width="100" height="100">](https://documenter.getpostman.com/view/20119504/UzR1J2S1) 
  <br>
  <br>  
 ### 📑 DevOps

- **애자일 개발 프로세스** <br>
  [<img src="/uploads/701a1a49463ee10b6f674618177c7a5e/image.png" width="100" height="100">](https://busan-team-5.atlassian.net/jira/software/projects/T5/boards/1?selectedIssue=T5-53) [<img src="/uploads/cbe857ea580236fd8adf7a22d385da8a/image.png" width="100" height="100">](https://kdt-gitlab.elice.io/sw_track/class_02_busan/web_project_2/team5) -->


  <br>
  <br>

## 5. 파일 및 폴더 구성
### Client
  ```
src
 ┣ components
 ┃ ┣ Footer.jsx
 ┃ ┣ Header.jsx
 ┃ ┣ Infinite.jsx
 ┃ ┣ LoginComponent.jsx
 ┃ ┣ Logo.jsx
 ┃ ┣ Modal.jsx
 ┃ ┣ ProgressBar.jsx
 ┃ ┣ Question.jsx
 ┃ ┗ SNS.jsx
 ┣ fonts
 ┃ ┣ NEXONLv1GothicBold.ttf
 ┃ ┣ NEXONLv1GothicRegular.ttf
 ┃ ┗ TmoneyRoundWindRegular.ttf
 ┣ page
 ┃ ┣ EmptyPage.jsx
 ┃ ┣ Loading.jsx
 ┃ ┣ Main.jsx
 ┃ ┣ MyPage.jsx
 ┃ ┣ NotFound.jsx
 ┃ ┣ Result.jsx
 ┃ ┗ Survey.jsx
 ┣ styles
 ┃ ┗ login.scss
 ┣ App.jsx
 ┣ App.test.js
 ┣ GlobalStyle.jsx
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ reportWebVitals.js
 ┗ setupTests.js
```
### Back
```
src
 ┣ db
 ┃ ┣ models
 ┃ ┃ ┣ food-model.js
 ┃ ┃ ┗ user-model.js
 ┃ ┣ schemas
 ┃ ┃ ┣ food-schema.js
 ┃ ┃ ┗ user-schema.js
 ┃ ┗ index.js
 ┣ middlewares
 ┃ ┣ error-handler.js
 ┃ ┣ index.js
 ┃ ┣ login-required.js
 ┃ ┗ user-validator.js
 ┣ passport
 ┃ ┣ googleStrategy.js
 ┃ ┣ index.js
 ┃ ┣ kakaoStrategy.js
 ┃ ┗ naverStrategy.js
 ┣ routers
 ┃ ┣ auth-router.js
 ┃ ┣ food-router.js
 ┃ ┣ index.js
 ┃ ┗ user-router.js
 ┣ services
 ┃ ┣ food-service.js
 ┃ ┣ index.js
 ┃ ┗ user-service.js
 ┣ test
 ┃ ┣ auth.spec.js
 ┃ ┣ food.spec.js
 ┃ ┗ user.spec.js
 ┣ utils
 ┃ ┣ index.js
 ┃ ┗ setUserToken.js
 ┗ app.js
```

## 6. 구성원 역할

|  이름  | 역할             |
| :----: | ---------------- |
| 서정민 | 프론트엔드, 팀장 |
| 장기성 | 프론트엔드       |
| 김동화 | 백엔드           |
| 이채연 | 백엔드           |
