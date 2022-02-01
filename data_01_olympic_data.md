# 01. Olympic Medal data

- 하계 올림픽 데이터를 정리해보자

## 1.1. 필요한 라이브러리 다운로드

```python
!pip install lxml
!pip install html5lib
!pip install openpyxl
```

## 1.2. 데이터 가져오기

```python
import pandas as pd 
import numpy as np
```

- 올림픽 메달 집계를 구글에 검색하고 위키백과 자료를 가져와보자

```python
df = pd.read_html('https://ko.wikipedia.org/wiki/%EC%98%AC%EB%A6%BC%ED%94%BD_%EB%A9%94%EB%8B%AC_%EC%A7%91%EA%B3%84')

print(df)
```

- 위키 백과에 있는 html 데이터를 가져올 수 있다
- [] 에 쌓여있는것을 보니 리스트 임을 알 수 있다.

## 1.3. 데이터를 읽고 정리

```python
df[0].head()
'''
	하계 참가 횟수	Unnamed: 2	Unnamed: 3	Unnamed: 4	계	동계 참가 횟수	Unnamed: 7	Unnamed: 8	Unnamed: 9	계.1	전체 참가 횟수	Unnamed: 12	Unnamed: 13	Unnamed: 14	총합
국가 (IOC 코드)															
아프가니스탄 (AFG)	14	0	0	2	2	0	0	0	0	0	14	0	0	2	2
알제리 (ALG)	13	5	4	8	17	3	0	0	0	0	16	5	4	8	17
아르헨티나 (ARG)	24	21	25	28	74	19	0	0	0	0	43	21	25	28	74
아르메니아 (ARM)	6	2	6	6	14	7	0	0	0	0	13	2	6	6	14
오스트랄라시아 (ANZ) [ANZ]	2	3	4	5	12	0	0	0	0	0	2	3	4	5	12
'''
```

- 위 데이터에서 필요한 정보를 뽑아보자

```python
df = pd.read_html('https://ko.wikipedia.org/wiki/%EC%98%AC%EB%A6%BC%ED%94%BD_%EB%A9%94%EB%8B%AC_%EC%A7%91%EA%B3%84', header = 0, index_col = 0)
```

## 1.4. 필요한 데이터 추출
- 우리가 필요한 데이터는 하계 대회에 참가한 국가들의 메달 정보이다
- 국가코드를 index로 다른 column은 header로 가져오자
- 필요한 정보는 0번째 리스트에 있음을 알 수 있다


```python
df[0].head()
'''
	하계 참가 횟수	Unnamed: 2	Unnamed: 3	Unnamed: 4	계	동계 참가 횟수	Unnamed: 7	Unnamed: 8	Unnamed: 9	계.1	전체 참가 횟수	Unnamed: 12	Unnamed: 13	Unnamed: 14	총합
국가 (IOC 코드)															
아프가니스탄 (AFG)	14	0	0	2	2	0	0	0	0	0	14	0	0	2	2
알제리 (ALG)	13	5	4	8	17	3	0	0	0	0	16	5	4	8	17
아르헨티나 (ARG)	24	21	25	28	74	19	0	0	0	0	43	21	25	28	74
아르메니아 (ARM)	6	2	6	6	14	7	0	0	0	0	13	2	6	6	14
오스트랄라시아 (ANZ) [ANZ]	2	3	4	5	12	0	0	0	0	0	2	3	4	5	12
'''
```

- 이 중 하계에 관련한 정보를 뽑아보자

```python
summer = df[0].iloc[:,:5]
summer.head()
'''
	하계 참가 횟수	Unnamed: 2	Unnamed: 3	Unnamed: 4	계
국가 (IOC 코드)					
아프가니스탄 (AFG)	14	0	0	2	2
알제리 (ALG)	13	5	4	8	17
아르헨티나 (ARG)	24	21	25	28	74
아르메니아 (ARM)	6	2	6	6	14
오스트랄라시아 (ANZ) [ANZ]	2	3	4	5	12
'''
```

- column을 다시 정해주자

```python
summer.columns = ['하계참가횟수','금','은','동','계']
summer.head()
'''

하계참가횟수	금	은	동	계
국가 (IOC 코드)					
아프가니스탄 (AFG)	14	0	0	2	2
알제리 (ALG)	13	5	4	8	17
아르헨티나 (ARG)	24	21	25	28	74
아르메니아 (ARM)	6	2	6	6	14
오스트랄라시아 (ANZ) [ANZ]	2	3	4	5	12
'''
```

- 금을 많은 받은 나라를 기준으로 정렬

```python
# 데이터를 복사하여 사용하면 원본 데이터를 유지하면서 새 데이터 가공이 가능하지만 본인은 생략했다
summer.sort_values('금', ascending=False, inplace = True)
summer.head()
'''
	하계참가횟수	금	은	동	계
국가 (IOC 코드)					
총합	28	5116	5082	5490	15688
미국 (USA) [P] [Q] [R] [Z] [F]	27	1022	795	706	2523
소련 (URS) [URS]	9	395	319	296	1010
영국 (GBR) [GBR] [Z]	28	263	295	293	851
중화인민공화국 (CHN) [CHN]	10	224	167	155	546
'''
```

## 1.5. 가공한 데이터 엑셀에 저장

```python
summer.to_excel('하계올림픽메달.xlsx')
```

