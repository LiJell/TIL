# 웹 기초 III

- 인터넷은 보통 TCP/IP라는 약속으로 연결되어 있다
- 인터넷 중 "웹"에서는 서로 통신하기 위해 HTTP(HyperText Transfer Protocol)를 사용한다

## HTTP

- 서버와 클라이언트가 인터넷 상에서 데이터를 주고 받기위한 프로토콜을 이야기함
- 어떠한 종류의 데이터도 전송할 수 있도록 설계되어있음



## 작동방식

- HTTP는 서버/클라이언트 모델임
- 요청과 응답으로 이루어짐
  - 클라이언트가 서버에 요청하면 서버가 클라이언트에게 응답
- 무상태 프로토콜이라고도 부름
  - 요청과 응답의 과정이 끝나면 연결을 끊음
    - 클라이언트가 바로 다음 요청을 해도 아까 요청한 클라이언트인지 알 수 없다



- 이러한 특징은 장단점이 있음
  - 장점: 불특정 다수 대상 서비스에 적합
  - 단점: 연결을 끊기 때문에 클라이언트가 이전에 뭘 했는지 알 수 없음
    - 따라서 정보를 유지할 수 있는 쿠키(Cookie) 기술이 등장



## URL

- Uniform Resource Locator의 약자
- 웹상에서 문서와 다른 자원들의 위치를 나타내기 위해 사용되며, 크게 세가지 부분으로 나뉨
  - 프로토콜 종류
  - 자원이 있는 서버의 IP주소, 도메인주소, 포트번호
  - 자원위치
- 접근 프로토콜://IP주소 또는 도메인 이름/문서의 경로/문서이름

- 물리적인 서버를 찾기 위해 IP 나 도메인이 필요하기 때문에 물리적인 서비를 찾고나면 해당 서버안에 있는 소프트웨어 서버를 찾기 위해 포트값이 필요함
- 하나의 물리서버에는 여러개의 소프트웨어 서버가 동작할 수 있는데 0보다 큰 숫자를 가지는 포트값이 각각 다르게 동장해야함



## 웹 동작

- 클라이언트가 원하는 서버에 접속
- 클라이언트가 서버에 요청
- 서버가 요청에 따른 응답 결과를 클라이언트한테 응답
- 응답이 끝나고 나면 서버와 클라이언트의 연결이 끊김



### 요청 데이터 포맷

- 클라이언트가 서버에 요청할 때 정해진 규칙이 있음
  - 웹 브라우저는 요청 메시지라는 것을 갖고, 메시지는 요청 헤더, 빈줄, 요청 바디 이렇게 세 부분으로 나뉨



#### 1. 요청헤더

- 요청 메서드 : GET, POST 등

- 요청 URI : 요청하는 자원의 위치 명시

- HTTP 프로토콜 버전 : 웹브라우저가 사용하는 프로토콜 버전 명시

 

#### 2. 요청바디

- GET방식은 요청 바디가 없음 ( 자원 등 가져가야 할 부분을 URI에 붙임)
- POST나 PUT 사용시 들어옴



### 응답 데이터 포맷

#### 1. 응답헤더

- 응답 HTTP 프로토콜 버전 / 응답 코드 / 응답 메시지
- 날짜 
- 웹 서버 이름 버전
- 콘텐츠 타입 
- 등등



#### 2. 응답바디

- 응답 리소스 데이터



### 요청 메서드 종류

- GET: 정보를 요청하기 위해서 사용 (SELECT)
- POST: 정보를 밀어넣기 위해서 사용 (INSERT)
- PUT: 정보를 업데이트하기 위해서 사용 (UPDATE)
- DELETE: 정보를 삭제하기 위해서 사용 (DELETE)
- HEAD: (HTTP) 헤더 정보만 요청. 해당 자원이 존재하는지 혹은 서버에 문제가 없는지 확인하기 위해서 사용
- OPTIONS: 웹서버가 지원하는 메서드의 종류를 요청
- TRACE: 클라이언트의 요청을 그대로 반환. 





## HTTPS와 HTTP의 차이점

- HTTPS (HyperText Transfer Protocol Secure)는 기존 HTTP에서 보완이 추가된 방식
- 너트워크 프로토콜 암호화 방식을 사용하여 클라이언트가 웹 서버에 데이터 전달시 암호화를 하여 제 3자가 정보를 훔치지 못하도록 방지할 수 있음. 