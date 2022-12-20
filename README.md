# Next.js 뿌시기 🤓
> React + Express.js + react-router-dom ★ ~ Server Side Rendering ~ ★ <br/>
정말 쉽다! next! (level~ 👯‍♀️)
## 개발 환경 세팅 📝
-  npx create-next-app@latest .
- npm install next@12 (현재는 13 버전까지 나왔으므로, 12 버전으로 깔자.)
- `npm run dev` : 개발 환경 실행
- `npm run build` : .next 라는 곳에 빌드 파일 생성
- `npm run start` : 배포된 파일 실행
## 장점
- 검색 엔진 최적화 (SEO)
- 모든 파일에 react를 import 할 필요가 없다.
## Pages 📝
- react.js component 를 export 하고 있는 파일을 `pages` 폴더 안에 두기만 하면 next.js 가 파일의 이름을 가져다가 url 의 이름으로 쓴다.
- 중요한 건, pages 폴더에서 유저에게 보여 주고 싶은 걸 export default function 을 통해 연결해 주는 겁니돠.
## Routing 📝
- anchor 태그에 href를 넣어 주는 것이 아닌, Link 태그 안에 href를 넣어 줘야 합니다.
- 라우팅 시 웹 사이트가 새로고침 되지 않는 큰 장점이 있습니다.
- style 이나 className 적용시킬 때는 Link > anchor 태그에 적용시킵니다.
## CSS Modules 📝
- `XXXX.module.css` 파일을 생성한다.
- `import styles from "./XXXX.module.css"`
- 자바스크립트 오브젝트에서의 프로퍼티 형식으로 적는다. (ex. className={styles.nav})
- 특정 문자열을 만들어서 삽입하는 방식도 있다. (ex. <div className={`${styles.link}`} ${router.pathname === "/" ? styles.active : ""} )
- 클래스 이름들의 배열을 만드는 방법도 있다. (ex. <div className={[styles.link, router.pathname === "/about" ? styles.active : "",]join(" ")}>)
> 단점
- 요소별로 파일을 바꿔야 함.
- 클래스 이름들을 기억해야 하는 문제.
- 클래스 이름 자체를 구현하는 게 복잡시려움, 특히 조건자....
## Styles JSX 📝
- NextJS 고유의 방법.
- 어플리케이션에 styles 를 추가하는 또 다른 방식이다.
- 내부 스타일 시트에서 jsx props 추가한 뒤, 중괄호로 백틱을 감싸면 된다.
- 컴포넌트 내부 범위에 해당되는 영역에서만 스타일 지정이 가능하다.
## Custom App 📝
- 전역 styles 를 추가하고 싶을 때는 styls jsx 에 `global` prop 을 추가해 준다.
- styles/global.css 는 App 컴포넌트에서는 적용이 불가능하고, 커스텀된 페이지나 컴포넌트 내에서만 import 해서 사용할 수 있다.
## Server Side Rendering
- export async function getServerSideProps() {}
- 요청할 때마다 HTML 이 생성되기 때문에 데이터가 계속 업데이트 된다.
- 데이터를 새로 받아와 페이지가 렌더링 된다.
- 해당 페이지 사용자가 요청 시, getServerSideProps 를 선 실행 후, front 가 server 에 직접 요청하여 데이터를 받아와서 page 컴포넌트에 데이터를 props 로 전달하여 렌더링 한다.
- getServerSideProps 는 데이터가 계속 바뀌는 페이지에 사용하자.