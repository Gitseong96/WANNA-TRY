# WANNA-TRY Refactoring 
##  Refactoring 항목 
    1. 불안전한 타입을 TypeScript를 통해 정의
    2. 재사용 가능한 컴포넌트로 만들기 위해
    3. 기존에 react Hook을 통해 관리하던 상태  redux를 통해 전역 상태관리
    4. 추가로 코드정리 예정

## 2-1. reactJs => reactTs
      * npm install --save typescript @types/node @types/react @types/react-dom @types/jest를 통해 typescript로 전환
      * 기존에 사용하는 모듈에 대한 @types/**** 를 추가로 설치
      * 기존에 작성되어 있던 JSX=>TSX ,JS=>TS 로 전환
      * Start-TS Branch
## 2-2. 재사용
- 재사용 가능한 컴포넌트로 재구성 
<img width="50%" src="https://user-images.githubusercontent.com/102665966/210162608-0aa14db9-7031-4895-8c42-7aaf9cab4d53.png"/>

- 정리된 코드
<img width="70%" src="https://user-images.githubusercontent.com/102665966/210162609-a5b62a94-662d-4c23-a05a-4f0d28e515da.png"/>

## 2-3. redux 
- 이전코드 : context Hook을 통해 상태관리
<img width="40%" src="https://user-images.githubusercontent.com/102665966/210162830-3751cedc-07c4-4ff9-a6e4-c6af74852717.png"/>
<img width="40%" src="https://user-images.githubusercontent.com/102665966/210162873-3f05fee1-cfbc-497d-91bd-1d8130b19afd.png"/>

- redux 적용
- custom 훅을 이용해서 view 기능만 하도록 코드 정리
<img width="80%" src="https://user-images.githubusercontent.com/102665966/210162933-2bec2169-1430-4348-9ca5-bbe17323c20e.png"/>
