# Next.js 뿌시기 🤓
> 정말 쉽다! next! (level~ 👯‍♀️)
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