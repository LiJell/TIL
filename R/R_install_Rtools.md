# Rtools 설치

- R 4.0.0부터 윈도우용 R은 rtools40이라 불리는 toolchain bundle을 사용하여 다운이 필요합니다
- R을 build하고 유지하는것을 쉽게 만들어준다고 하네요 ㅎㅎ 

## Rtools40 다운받기

- https://cran.r-project.org/bin/windows/Rtools/rtools40.html

![image-20220213005747372](C:\Users\hanju\TIL\image.assets\image-20220213005747372.png)

- Windows 환경에 맞는 파일을 다운로드 해주세요

- 다운로드가 끝났으면 실행시켜주세요
- 실행이 끝났으면 메모장에 아래 문구를 작성 후, 문서 폴더에 '.Renviron' 이라는 파일명으로 텍스트 파일을 저장합니다. ( PATH="${RTOOLS40_HOME}\usr\bin;${PATH}" )

![image-20220213010039613](C:\Users\hanju\TIL\image.assets\image-20220213010039613.png)

![image-20220213010212705](C:\Users\hanju\TIL\image.assets\image-20220213010212705.png)

- 저장을 완료했다면 R을 실행시켜 다음 코드를 입력합니다
- R에서는 경로를 지정할 때 \\ \ 역슬래쉬 두개를 하거나 / 슬래쉬 하나로 해야합니다

```R
writeLines('PATH="${RTOOLS40_HOME}\\usr\\bin;${PATH}"', con = "~/.Renviron")
```



- 실행 후 R을 재시작하신 다음 아래 명령어를 입력합니다

```R
Sys.which("make")
```



- 아래와 같이 경로가 나왔다면 설정이 잘 된 것입니다
- 저는 D에 저장을 했기 때문에 아래와 같이 나왔고
- C에 설치하신 분은 C로 나옵니다

![image-20220213010619806](C:\Users\hanju\TIL\image.assets\image-20220213010619806.png)

- 마지막으로 아래 명령어를 입력하여 jsonlite까지 설치해주시면 끝!

```R
install.packages("jsonlite", type = "source")
```

