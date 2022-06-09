# What is GraphQL

## REST API의 단점을 GraphQL이 해결하는 방법

### GraphQL

- https://graphql.org/

- 하나의 specification이다
- domain-specific language

---

### GraphQL이 해결하는 문제점

#### 1. Over-fetching
- 필요한 데이터보다 더 많은 데이터를 fetch하는 것을 말함

---

- GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있음.
  - REST API는 URL의 정보를 선택권 없이 모두 받아야함
  - 데이터가 많으니까 느려짐
- GraphQL query는 항상 예측 가능한 결과를 반환함
  - 필요한 정보만 요청하기 때문 

---



#### 2. Under-fetching

- 필요한 데이터보다 적은 데이터를 fetch하는 것을 말함
- GraphQL API는 앱에 필요한 모든 데이터를 **단일 request**로 가져옵니다. 
  - 일반적인 REST API는 여러 URL에서 로딩해야 함 
    - 예, id 값을 가지는 api를 따로 읽어야 하는 경우
    - 느려짐
- GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있음
  - image data를 많이 사용하는 경우 유용할 수 있음