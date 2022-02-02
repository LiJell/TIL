# 02. about Pandas

- pandas는 numpy를 기반으로 만들어진 라이브러리로 데이터 분석에서 가장 많이 활용된다
- 1차원 배열 형태의 데이터 구조를 Series, 2차원 배열 형태를 DataFrame이라고 한다

## 2.1. DataFrame

- pandas의 가장 기본적인 구조인 DataFrame은 2차원 배열 형태로 행과 열이 있고, 행을 구분해주는 index, 열을 구분해주는 column이 있다
- 아래는 날짜 형태로 된 8개의 인덱스를 간단히 만들어봤다

```python
import pandas as pd
index = pd.date_range('1/1/2000', periods= 8)
print(index)
'''
DatetimeIndex(['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-04',
               '2000-01-05', '2000-01-06', '2000-01-07', '2000-01-08'],
              dtype='datetime64[ns]', freq='D')
'''
```

- numpy 라이브러리를 활용해서 8행 3열로 구성된 데이터 프레임에 랜덤 데이터를 생성
- 인덱스와 컬럼 이름을 정하여 보자
- rand() 함수를 사용해서 만든 랜덤 데이터이므로 결과는 각자 다를 수 있다

```python
import numpy as np
df = pd.DataFrame(np.random.rand(8,3),
                  index = index, # 여기서 index는 위에 있는 date_range를 한 index임
                  columns = list('ABC'))
df
'''

			A			B			C
2000-01-01	0.480908	0.307299	0.359912
2000-01-02	0.268228	0.985586	0.402354
2000-01-03	0.440780	0.885170	0.096519
2000-01-04	0.508553	0.086263	0.184887
2000-01-05	0.210129	0.409767	0.306002
2000-01-06	0.904876	0.926466	0.983535
2000-01-07	0.288619	0.428945	0.341979
2000-01-08	0.533757	0.510657	0.095731
'''
```

- DataFrame, df의 각 열에 접근 하려면 열의 이름을 대괄호 안에 넣으면 된다, 인덱스는 선택하지 않아도 함께 출력된다
- 특정 행이나 열을 선택하면 1차우너 배열의 형태인 Series 구조로 표현된다

```python
import pandas as pd
import numpy as np

index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3),
                  index = index, # 여기서 index는 위에 있는 date_range를 한 index임
                  columns = list('ABC'))
print(df['B'])
'''
2000-01-01    0.757376
2000-01-02    0.546541
2000-01-03    0.446979
2000-01-04    0.974200
2000-01-05    0.693020
2000-01-06    0.484196
2000-01-07    0.379061
2000-01-08    0.126084
Freq: D, Name: B, dtype: float64
'''
```

## 2.2. 마스크 기능

- numpy에서 적용되는 마스크 기능을 데이터 프레임에서도 사용할 수 있다
- 특정 조건에 대하여 True, False 값을 반환하여 원하는 데이터를 골라내기 좋다

```python
import pandas as pd
import numpy as np

index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3),
                  index = index, # 여기서 index는 위에 있는 date_range를 한 index임
                  columns = list('ABC'))
print(df['B'] > 0.4)
'''
2000-01-01    False
2000-01-02     True
2000-01-03     True
2000-01-04     True
2000-01-05    False
2000-01-06     True
2000-01-07     True
2000-01-08     True
Freq: D, Name: B, dtype: bool
'''
```

- 위에 나온 bool 값들을 데이터 프레임에 적용시켜보자
- 조건에 따라 True, 와 False 값이 반환이 되고 True는 1, False는 0의 값을 가지기 때문에 bool type의 값을 다시 DataFrame에 넣었을 때 True 값만 반환되는 것을 알 수 있다

```python
df2 = df[df['B'] > 0.4]
df2
'''

			A			B			C
2000-01-02	0.361454	0.426597	0.785143
2000-01-03	0.507276	0.961292	0.507987
2000-01-04	0.562909	0.986664	0.195398
2000-01-06	0.857792	0.834826	0.257774
2000-01-07	0.836618	0.776014	0.029324
2000-01-08	0.343417	0.902969	0.332623
'''
```

## 2.3. Transpose 행과 열을 바꿔주는 방법

- T는 행과 열을 바꿔주는 transpose를 의미한다

```python
df2.T
'''

	2000-01-02	2000-01-03	2000-01-04	2000-01-06	2000-01-07	2000-01-08
A	0.361454	0.507276	0.562909	0.857792	0.836618	0.343417
B	0.426597	0.961292	0.986664	0.834826	0.776014	0.902969
C	0.785143	0.507987	0.195398	0.257774	0.029324	0.332623
'''
```

## 2.4. DataFrame 연산

#### 2.4.1. 행 방향 축을 기준으로 한 연산

- A 열의 값을 B열의 값으로 나눈 후, 그 결과를 새로만든 D열에 저장해보자

```python
import pandas as pd
import numpy as np
index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3), index = index, columns = list('ABC'))

df['D'] = df['A'] / df['B'] # A열의 값을 B열의 값으로 나눈 값을 D열에 저장

df
'''
			A			B			C			D
2000-01-01	0.410678	0.718341	0.491227	0.571704
2000-01-02	0.131549	0.973062	0.404208	0.135191
2000-01-03	0.363654	0.502137	0.552700	0.724212
2000-01-04	0.101791	0.203615	0.632572	0.499917
2000-01-05	0.564961	0.616168	0.573571	0.916894
2000-01-06	0.016784	0.494866	0.400756	0.033915
2000-01-07	0.811537	0.718356	0.605999	1.129714
2000-01-08	0.546545	0.348447	0.408979	1.568515
'''
```

#### 2.4.2. 열 방향 축을 기준으로 한 연산

- 행 우선으로 합을 구하고, 그 결과를 E라는 열을 생성해서 자장해보자

```python
import pandas as pd
import numpy as np
index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3), index = index, columns = list('ABC'))

df['D'] = df['A'] / df['B'] # A열의 값을 B열의 값으로 나눈 값을 D열에 저장
df['E'] = np.sum(df, axis= 1) # axis = 0 이 default이다 

df.head()
'''
			A			B			C			D			E
2000-01-01	0.107525	0.663853	0.459135	0.161971	1.392484
2000-01-02	0.676622	0.386147	0.478021	1.752242	3.293032
2000-01-03	0.859160	0.563298	0.228915	1.525232	3.176605
2000-01-04	0.750737	0.190000	0.717784	3.951241	5.609763
2000-01-05	0.022413	0.032768	0.518746	0.683967	1.257894
'''
```

- 2차원에서 axis = 0 은 행을 axis = 1 은 열을 뜻한다
- 위는 1개의 열을 1개의 열로 나누는 계산이기 떄문에 산술 연산자를 사용할 수 있지만 
- 여러 개의 열에 대한 계산을 하려면 pandas 라이브러리를 사용해야한다.

```python
import pandas as pd
import numpy as np
index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3), index = index, columns = list('ABC'))

df['D'] = df['A'] / df['B'] # A열의 값을 B열의 값으로 나눈 값을 D열에 저장
df['E'] = np.sum(df, axis= 1) # axis = 0 이 default이다 
df = df.sub(df['A'], axis= 0 )
df.head()
'''

			A	B			C			D			E
2000-01-01	0.0	0.168562	-0.569552	0.030090	2.014004
2000-01-02	0.0	-0.715075	-0.259127	2.565473	4.574512
2000-01-03	0.0	-0.055217	0.329850	1.087969	2.050415
2000-01-04	0.0	-0.378495	0.174851	2.329804	3.857139
2000-01-05	0.0	-0.453317	0.287529	6.867477	8.274406
'''
```

- 데이터 전체를 C열 값으로 나눌 때는 div() 함수를 사용한다
- 데이터 프레임은 CSV 파일로 쉽게 저장이 가능하다

```python
import pandas as pd
import numpy as np
index = pd.date_range('1/1/2000', periods= 8)
df = pd.DataFrame(np.random.rand(8,3), index = index, columns = list('ABC'))

df['D'] = df['A'] / df['B'] # A열의 값을 B열의 값으로 나눈 값을 D열에 저장
df['E'] = np.sum(df, axis= 1) # axis = 0 이 default이다 
df = df.sub(df['A'], axis= 0 )
df = df.div(df['C'], axis= 0 )

df.to_csv('test.csv')

df.head()
```

