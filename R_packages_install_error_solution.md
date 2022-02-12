# R에서 KoNLP 설치오류 해결 방법

- 첫번째로 KoNLP 경로 설치하기
- R 버전이 계속 업데이이트 되면서 구 패키지들이 작동 안되는 경우에 해당됩니다

## 구 패키지를 설치할 수 있는 두가지 방법

1. CRAN사이트에서 직접 패키지를 다운로드해서 경로를 지정
2. 패키지 다운로드 받을 수 있는 CRAN 사이트를 명시해서 다운받는 방법

- 두번째 방법을 알아봅시다!

## CRAN 사이트를 명시하여 다운로드하기

- 사이트: https://cran.r-project.org/src/contrib/Archive/
- 위 사이트를 들어가서 CTRL + F 를 눌러 원하는 패키지를 검색
  -  **저는 KoNLP 패키지가 필요하기 때문이 해당 패키지 기준으로 진행하겠습니다**
- Rstudio에서 아래와 같이 입력합니다
- ulr 경로는 원하는 패키지로 들어가서 원하는 버전을 명시해 주시면 됩니다.
  - 예를 들어 저는 KoNLP가 필요하기 때문에 KoNLP의 Archive에 들어와서  ulr을 확인하면 다음과 같이 나옵니다. https://cran.r-project.org/src/contrib/Archive/KoNLP/
  - 제가 필요한 버전은 KoNLP_0.80.2.tar.gz 이기 때문에 ulr 뒤에 필요한 버전에 해당되는 이름을 적어주시면 됩니다

```R
install.packages("https://cran.r-project.org/src/contrib/Archive/KoNLP/KoNLP_0.80.2.tar.gz", repos = NULL, type= "source", INSTALL_opts = c('--no-lock'))
```



## 위 방법을 해도 오류가 나올 때

- dependencies are not available for packages 이렇게 에러가 나는 분들은 옆에 써져있는 각각의 패키지들을 다운받아 주면 됩니다. 
- 저는 아래와 같은 패키지들이 해당되네요... 
  - rJava, hash, tau, Sejong, RSQLite, devtools
- 따라서 해당되는 모든 패키지를 아래와 같이 다운하겠습니다
  - install.packages('rJava')
    install.packages('hash')
    install.packages('tau')
    install.packages('Sejong')
    install.packages('RSQLite')
    install.packages('devtools')

## Fail to install scala-library-2.11.8.jar.

- 위와 같은 에러가 났다면 밑에 경로가 나와있을겁니다
- Recommand to install library manually in/data/gannet/document/R/test/00LOCK-KoNLP/00new/KoNLP/java
- 여기서 KoNLP 까지의 경로를 따라 들어가보세요. java폴더안에 여러가지 파일을 확인할 수 있습니다
  - 경로가 다르더라도 경로 따라 들어가주시면 됩니다
- 아래 링크로 들어가서 같은 부분에 첨부파일이 있습니다. 다운로드하셔서 덮어 씌워주시면 됩니다
- https://lime-jelly.tistory.com/entry/R%EC%97%90%EC%84%9C-%ED%8C%A8%ED%82%A4%EC%A7%80-%EC%84%A4%EC%B9%98%EC%98%A4%EB%A5%98-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95



## Rtools 설치

- 혹시 아래와 같은 문구가 나온다면, 링크를 따라가서 Rtools를 다운받아주시면 됩니다.
- https://lime-jelly.tistory.com/entry/Rtools-%EC%84%A4%EC%B9%98

```R
WARNING: Rtools is required to build R packages but is not currently installed. Please download and install the appropriate version of Rtools before proceeding:

https://cran.rstudio.com/bin/windows/Rtools/
```

