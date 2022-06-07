# API

GraphQL
API를 위한 쿼리 언어
GraphQL은 클라이언트가 필요한 것을 정확하게 요청할 수 있는 기능을 제공하며, 시간이 지남에 따라 API를 더 쉽게 발전시키고 강력한 개발자 도구를 활성화합니다.
https://graphql.org/

Graphile
PostgreSQL를 위한 확장 가능한 고성능 자동 GraphQL API
https://www.graphile.org/

Hasura
모든 데이터에 대한 즉각적인 GraphQL
Hasura는 신규 및 기존 데이터 소스에 대한 즉각적인 GraphQL 및 REST API를 제공합니다. Hasura를 데이터에 연결하고 1분 이내에 API를 받으세요.
https://hasura.io/

---

- I am going to use `node.js` to learn GraphQL

- There will be two sections
  - First one will be comparing between GraphQL and REST API
  - On second one, we will see the GraphQL languages to learn how to build API via GraphQL

---

## API

- **A**pplication
- **P**rogramming
- **I**nterface

---

### Interface

- Interacting with something

- example: TV  - remote controll  - Person
  - remote controll is a interface to make interacting between person and TV
- Let's remind remote controll buttons when you imagine API

- We use API when we interact with application

---



## REST API

- Use when we want to interact with Back-End (Communication)

- Differences between REST API and GraphQL is how buttons are exposed

- 서버간의 통신이나 IOS 어플리케이션이 서버와 통신 할 때 REST-API 는 URL로 통신이 이루어짐 (JSON)
  - 예

```markdown
LiJellmovies.co/api/movies
LiJellmovies.co/api/movies/1
LiJellmovies.co/api/search?rating=9
```

---



## REST API + METHOD



```markdown
GET /2/users/라이젤/bookmarks
POST /2/users/라이젤/bookmarks

// GET으로 movies를 가져올 수 있고 
// POST로 movies를 만들 수 있고
GET LiJellmovies.co/api/movies
POST LiJellmovies.co/api/movies

//GET은 movies에서 id가 1인 정보를 가저올 수 있고
// PUT 은 movies에서 id가 1인 정보를 업데이트 할 수 있음 ( 잘 사용안함)
GET LiJellmovies.co/api/movies/1
PUT LiJellmovies.co/api/movies/1
GET LiJellmovies.co/api/search?rating=9
```

- GET 은 라이젤의 북마크를 가져올거고
- POST는 라이젤의 북마크를 새롭게 만들것임
- PUT은 업데이트
- DELETE는 삭제

---

## Recap

- Web API가 JS 코드를 사용해 브라우저에 노출되어있는 버튼을 누르는 방식이면
- REST API can press the buttons via calling URL
  - URL에는 명사만 쓰는게 좋음
