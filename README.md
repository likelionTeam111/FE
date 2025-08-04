# 컨벤션

### 1. 브랜치 규칙

1. 기본 브랜치: main
2. 기능 개발은 반드시 새로운 브랜치에서 진행합니다.
   - 규칙: feature/기능명 ex) feature/login
3. 병합(Merge): PR(Pull Request)로 진행하며, 코드 리뷰 후 main에 병합합니다.

---

### 2. 코드 스타일

1. CSS
   - styled-component 사용합니다.
   - 공통 스타일은 `src/assets/css/style.css`에 작성합니다.
   - 공용 변수는 `src/assets/css/setting/_vars.css`에 정의합니다.
2. 컴포넌트
   - 파일명은 PascalCase로 작성합니다. (`MyComponent.jsx`)
3. 상태 관리
   - 초반에 context 사용하다가 상황보고 zustand로 변경하겠습니다.

---

### 3. 폴더 구조

```
src/
├── apis/          # API 관련 로직을 모아놓는 상위 폴더
│   ├── api/       # axios 등으로 실제 HTTP 요청을 보내는 함수들 (순수 fetch 역할)
│   ├── service    # api 응답을 가공하거나 비즈니스 로직을 포함한 계층 (ex: 토큰 저장, 정제 등)
│   └── utils/     # axios 인스턴스 설정, 인터셉터, 공통 API 유틸 함수 등
│
├── assets/        # 정적 파일들 (이미지, 스타일 등)
│   ├── css/       # 전역 스타일(CSS, SCSS 등)
│   └── img/       # 프로젝트에서 사용하는 이미지 파일
│
├── components/    # 재사용 가능한 컴포넌트들 (버튼, 카드 등 UI 단위)
│
├── contexts/      # React Context API를 사용하는 글로벌 상태 관리 (ex: 로그인 상태, 테마 등)
│
├── hooks/         # 커스텀 훅 모음 (ex: useAuth, useFetch 등)
│
├── layouts/       # 페이지 전체 레이아웃 컴포넌트 (ex: Header + Sidebar + Outlet 구조)
│
├── pages/         # 실제 라우트 단위 페이지 컴포넌트 (ex: LoginPage, MainPage 등)
│
└── App.js         # 리액트 앱의 진입점 및 라우팅 정의
```
