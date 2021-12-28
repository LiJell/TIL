

# 데이터시각화 matplolib



## 1) 데이터 가져오기 

#### 1. CSV 파일 다운로드

- https://data.kma.go.kr/stcs/grnd/grndTaList.do?pgmNo=70

- 위 링크인 기상자료개방포털로 이동
- 기후통계분석 --> 기후분석 --> 기온분석으로 들어가 '기간'을 1904년 1월 1일부터 현재 일자로 설정
- 지역은 서울 검색
- csv 다운로드

![image-20211228211223785](C:\Users\hanju\AppData\Roaming\Typora\typora-user-images\image-20211228211223785.png)

## 2) 다운로드 한 파일 수정하기

#### 1. 다운로드 한 파일을 엑셀로 연 후 아래와 같이 수정

![image-20211228211350926](C:\Users\hanju\AppData\Roaming\Typora\typora-user-images\image-20211228211350926.png)

#### 2. 다른이름으로 저장

- 파일을 원하는 경로에 설정 후 이름을 seoul로 변경하고, 파일 형식은 CSV(쉼표로 분리) 선택
- 본인의 경로는 파이선의 root 폴더에 저장했다.

![image-20211228211605443](C:\Users\hanju\AppData\Roaming\Typora\typora-user-images\image-20211228211605443.png)

## 3) 주피터 노트북 키기

파이썬을 사용하는 이유는 시각화를 해주기 때문이다. 

#### 1. 주피터가 없다면 아래 링크에서 아나콘다 installer을 다운받아 주피터를 다운받는다.

- https://www.anaconda.com/products/individual

#### 2. 주피터의 root 폴더 경로를 설정

- 주피터의 root폴더를 설정하지 않았다면, 아래 링크중 하나를 선택하여 따라해 보자 (동일한 내용이다)
- https://lime-jelly.tistory.com/14
- https://github.com/LiJell/TIL/blob/master/Jupyter%20Notebook%20(%EC%A3%BC%ED%94%BC%ED%84%B0%20%EB%85%B8%ED%8A%B8%EB%B6%81)%20%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95%20%20%EC%8B%9C%EC%9E%91%ED%8F%B4%EB%8D%94%20%EB%B3%80%EA%B2%BD%EB%B0%A9%EB%B2%95.md

#### 3. 주피터 새 파일 생성 후 작성해보기

- 오른쪽 New를 선택하고 Pythond을 선택하면 된다.

![image-20211228212625211](C:\Users\hanju\AppData\Roaming\Typora\typora-user-images\image-20211228212625211.png)





## 4) 내 생일의 기혼 변화를 그래프로 그리기

```python
import csv
import matplotlib.pyplot as plt

f = open('./data/seoul.csv','r', encoding = 'cp949')  #저장한 파일의 경로를 입력하여 데이터를 연다                 
data = csv.reader(f)       #데이터 읽기
next(data)                 # 첫 row는 header이기 때문에 heaer 다음 문장부터 읽기 위해 이렇게 입력한다.
high = [] #최고 기온 값을 저장할 리스트 high 생성
low = []  #최저 기온 값을 저장할 리스트 low 생성

for row in data:
    if row[-1] != '' and row[-2] != '':                                    #최고 기온값과 최저 기온 값이 존재한다면 
        if row[0].split('-')[1] == '09' and row[0].split('-')[2] == '22':  # 날짜 값을 -문자를 기준으로 구분하여 저장
            high.append(float(row[-1]))                                    #최고 기온 값을 high 리스트에 저장
            low.append(float(row[-2]))                                     #최저 기온 값을 low 리스트에 저장

plt.rc('font', family = "Malgun Gothic")   # 맑은 고딕을 기본 글꼴로 설정
plt.rcParams['axes.unicode_minus'] = False # 한글폰트 사용시 - 부호 표시하기
plt.title('내 생일 기온 변화 그래프')        # 제목 설정

plt.plot(high,'hotpink', label= 'high')    # high 리스트에 저장된 값을 핫핑크로 표시하고 레이블 표시
plt.plot(low, 'skyblue', label= 'low')     # low 리스트에 저장된 값을 하늘색으로 표시하고 레이블 표시
plt.legend()                               # 범례 표시
plt.show()                                 # 그래프 나타내기
```

- 결과를 출력하면 아래와 같은 그래프를 얻을 수 있다!
- 오예!

![image-20211228213304814](C:\Users\hanju\AppData\Roaming\Typora\typora-user-images\image-20211228213304814.png)
