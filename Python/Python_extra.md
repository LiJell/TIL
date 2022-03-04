# Python Extras

## 1. Iterator

- Iterable(반복 가능) 객체

- 반복자로 요소를 순서대로 읽을 수 있음

- for 문과 함께 자주 사용됨

- 요소를 순회할 반복자 제공

```python
nums = [11,22,33]
it = iter(nums)
while True:
    try:
  	  num = next(it)
	except StopIteration:
	  break
  	print(num)
    '''
    11
	22
	33
    '''
```



### 1.1. Iterator Generator

- 매번 iterator 관련 메서드를 작성하는 수고를 덜 수 있음

- 시간과 메모리를 적게 차지해서 많이 사용

- yield

  - 값을 반환

  - return과 유사하나 변수의 마지막 값과 상태를 저장

```python
def seq_gen(data):
  for idx in range(0, len(data), 2):
    yield data[idx:idx+2]

solar_time = seq_gen("입춘우수경칩춘분청명곡우힙하소만망종하지소서대서")
for k in solar_time:
  print(k, end=', ')
'''
입춘, 우수, 경칩, 춘분, 청명, 곡우, 힙하, 소만, 망종, 하지, 소서, 대서, 
'''
```

- seq_gen generator
- **iter**, **next** 메서드를 내부에 자동 생성
- 인수로 전달받은 문자열 데이터를 분리하여 yield로 리턴

```python
# Generator를 사용한 경우

def seq_gen(data):
  for idx in range(0, len(data), 2):
    yield data[idx:idx+2]

solar_time = seq_gen("입춘우수경칩춘분청명곡우힙하소만망종하지소서대서")
for k in solar_time:
  print(k, end=', ')

# Generator를 사용하지 않은 경우

data = "입춘우수경칩춘분청명곡우힙하소만망종하지소서대서"
for k in (data[idx:idx+2] for idx in range(0, len(data),2)):
  print( k, end=', ')
```

```python
def foo():
  return 1

print(foo())
'''
1
'''
```

```python
def bar():
  yield 1

print(bar())
'''
<generator object bar at 0x7f33b269cf50>
'''
```

```python
b = bar()
next(b)
'''
1
'''
```

```python
def bar1():
  print("A")
  yield 1
  print("B")
  yield 2
  print("C")
  yield 3
    
b1 = bar1()
```

- 한개씩 선언하고 대기. 다시 선언하면 그 다음게 나옴


```python
next(b1)
'''
A
1
'''
```

```python
next(b1)
'''
B
2
'''
```

```python
next(b1)
'''
C
3
'''
```



## 2. Decorator 

### 2.1. First-Class-Citizen

- 파이썬에서 함수는 first-class citizen

- 이름을 가짐

- 리턴값으로 사용할 수 있음

---

여기까진 일반적인 다른 언어와 공통점이다

---

다른 언어와 다른점:

- 다른 변수에 대입 가능

- 인수로 전달가능 

- 컬렉션에 저장할 수 있음(list, tuple, dictionary)

- 함수 자체를 변수에 넣을 수 있음

```python
def add(a,b):
  print( a+b )
plus = add
plus(1,2)
'''
3
'''
```



### 2.2. Local Function

- 다른 함수 안에 정의되는 도우미 함수

- 함수 내부의 반복되는 코드를 통합하여 관리가 용이하게 함

```python
def calc_sum(n):
  def add(a, b):
    return a+b
  sum = 0
  for i in range(n+1):
    sum = add(sum, i)
  return sum

print ("~100= ", calc_sum(100))
'''
~100=  5050
'''
```

- 상호 평등한 관계로 작성할 경우 동작에는 문제가 없음

- 단, calc_sum이 add에 종속되어 독립성이 떨어지고 재사용이 번거로운 단점이 있음

```python
def add(a, b):
    return a+b

def calc_sum(n):
  sum = 0
  for i in range(n+1):
    sum = add(sum, i)
  return sum

print ("~100= ", calc_sum(100))
```



### 2.3. Decorator

- 함수에 원하는 코드를 추가하는 기법

- 함수 래핑(wrapping)
  - 원하는 코드 추가 및 원래 함수를 대리 호출하여 기능을 확장

```python
def inner():
  print("결과를 출력")

def outer(func):
  print('-'*20)
  func()
  print('-'*20)

outer(inner)
'''
--------------------
결과를 출력
--------------------
'''
```

- 호출 구문이 직관적이지 않다
- 해결책은??

```python
def inner():
  print("결과를 출력")

def outer(func):
  def wrapper():
    print('-'*20)
    func()
    print('-'*20)
  return wrapper

inner = outer(inner)  
inner()
'''
--------------------
결과를 출력
--------------------
'''
```

- Example

```python
def para(func):
    def wrapper():
      return "<p>" +str(func()) + "</p>"
    return wrapper

@para
def outname():
  return 'James Bond'

@para
def outage():
  return '29'

print(outname())
print(outage())

'''
<p>James Bond</p>
<p>29</p>
'''

```

- 래핑되는 함수가 인수를 가지는 경우 대리호출시에도 인수가 그대로 전달됨

```python
def para(func):
    def wrapper():
      return "<p>" +str(func()) + "</p>"
    return wrapper

@para
def outname(name):
  return 'Name: ' + name

@para
def outage(age):
  return 'Age: ' + str(age)

print(outname('James Bond'))
print(outage(29))
'''
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-36-ae6ac92a202c> in <module>()
     12   return 'Age: ' + str(age)
     13 
---> 14 print(outname('James Bond'))
     15 print(outage(29))
     16 

TypeError: wrapper() takes 0 positional arguments but 1 was given
'''
```

- wrapper은 func() 형태로만 대리호출 하기 때문에 인수가 적용되지 않음
  - wrapper이 가변 인수를 받아야 함

```python
def para(func):
    def wrap(*args, **kwargs):
      return "<p>" +str(func(*args, **kwargs)) + "</p>"
    return wrap

@para
def outname(name):
  return 'Name: ' + name

@para
def outage(age):
  return 'Age: ' + str(age)

print(outname('James Bond'))
print(outname.__name__)
print(outage(29))
print(outage.__name__)

'''
<p>Name: James Bond</p>
wrap
<p>Age: 29</p>
wrap
'''
```

- outname함수의 **__name__** 속성이 wrapper로 출력됨
  - @wraps 데코레이터 -> 데코레이터 간 중첩시 문제를 해결

```python
from functools import wraps

def para(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
      return "<p>" +str(func(*args, **kwargs)) + "</p>"
    return wrapper

@para
def outname(name):
  return 'Name: ' + name

@para
def outage(age):
  return 'Age: ' + str(age)

print(outname('James Bond'))
print(outname.__name__)
print(outage(29))
print(outage.__name__)
'''
<p>Name: James Bond</p>
outname
<p>Age: 29</p>
outage
'''
```



### 2.4. Class Decorator

- 객체를 괄호 붙여 호출하는 경우 **__call__** 메서드가 자동 호출됨

- **__call__** 메서드에서 원래 함수 호출 전후 추가 작업 실행

```python
class Outer:
  def __init__(self,func):
    self.func = func
  def __call__(self):
    print('-'*20)
    self.func()
    print('-'*20)

def inner():
  print ('print result')

inner = Outer(inner)
inner()
'''
--------------------
print result
--------------------
'''
```

- inner()

  - 객체를 함수 형식으로 호출하면 래핑한 함수가 호출됨

  - 위 구문을 간단하게 줄여 클래스 데코레이터를 만듬

```python
class Outer:
  def __init__(self,func):
    self.func = func
  def __call__(self):
    print('-'*20)
    self.func()
    print('-'*20)

@Outer
def inner():
  print ('print result')


inner()
'''
--------------------
print result
--------------------
'''
```

 

## 3. 동적 코드 실행

### 3.1. eval

- 문자열 형태로 된 파이썬 표현식을 평가하여 결과를 반환

- 실시간으로 코드를 만들어 실행할 수 있음

```python
result = eval('2+3*4')
print(result)
a = 2
print (eval('a+3'))
city = eval("['seoul','osan','suwon','busan']")
for c in city:
  print (c, end=', ')
'''
14
5
seoul, osan, suwon, busan, 
'''
```



### 3.2. exec

- 파이썬 코드를 직접 실행하는 함수

```python
exec('val=3')
print(val)
exec("for i in range(5): print(i,end=', ')")
'''
3
0, 1, 2, 3, 4, 
'''
```

- eval 함수는 표현식을 평가하지만 문장을 실행하는 것은 아님

```python
eval('val=3')
print(val)
eval("for i in range(5): print(i,end=', ')")
'''
  File "<string>", line 1
    val=3
       ^
SyntaxError: invalid syntax
'''
```



### 3.3. compile

- 여러 줄 코드의 반복 처리도 가능
  - 계속 실행할 코드를 미리 해석 해 놓으면 동작이 빨라짐

- 나중에 exec, eval로 실행할 수 있음

- 나중에 실행할 수 있는 파이썬 코드 오브젝트를 리턴함

```python
compile (source, filename, mode, flags=0, dont_inherit=False, optimize=-1)
```

- source - normal string, byte string or AST object

- filename - 코드를 읽을 파일이름. 파일에서 읽는게 아니면 임의의 이름을 주면 됨

- mode - eval, exec, or single

  - eval : single expression만 받아들임

  - exec : 파이썬 expression, 클래스, 함수 등의 코드 블럭을 받아들임

  - single : single interactive expression만 받아들임

```python
code = compile("""
for i in range(5):
  print (i, end=', ')
print()
""", 'test', 'exec')

for n in range(10):
  exec(code)
'''
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
0, 1, 2, 3, 4, 
'''
```



## 4. *args & **kwargs

### 4.1. *args

- 함수에 임의 갯수의 argument를 넘겨주기 위해 사용

- 임의 갯수의 argument를 iterable로 만들어 줌

```python
from operator import mul

from functools import reduce

def multiply(*args):

 return reduce(mul, args)

\>>> multiply(2,3,5)

30
```



### 4.2. **kwargs

- args와 마찬가지로 함수 선언에 사용

- 함수에 임의의 keyworded argument를 넘겨줘 함수 내에서 dictionary로 억세스 할 수 있게 해 줌

```python
def display_stuff(**kwargs):

 if kwargs is not None:

 print kwargs

\>>> display_stuff(name='Jeff', passion='development', language='python')

{'passion':'development', 'name':'Jeff', 'language':'python'}

\>>>


```

- kwargs dictionary에 원하는 키가 없으면 KeyError가 발생

- 에러를 피하려면 억세스하려는 키가 dictionary에 존재하는지 체크

```python
def display_stuff(**kwargs):

 if kwargs is not None:

 print kwargs['passion']

\>>> display_stuff(error='KeyError')

Traceback (most recent call last):

 File "<stdin>", line 1, in <module>

 File "<stdin>", line 3, in display_stuff

KeyError: 'passion'

\>>>
```



### 4.3. *&**

```python
def print_vector(x, y, z):

 print ('<%s, %s, %s>' % (x,y,z))

\>>> print_vector(0,1,0)

<0, 1, 0>
```

- vector가 튜플이나 리스트로 표현된 경우

```python
\>>> tuple_vec = (1, 0, 1)

\>>> list_vec = [1, 0, 1]

\>>> print_vector(tuple_vec[0], tuple_vec[1], tuple_vec[2])

<1, 0, 1>
```

- '*' operator로 function argument unpacking이 가능

```python
\>>> print_vector(*tuple_vec)

<1, 0, 1>

\>>> print_vector(*list_vec)

<1, 0, 1>
```

- '**' operator로 dictionary에서 keyword argument unpaking이 가능

```python
\>>> dict_vec = {'y':0, 'z':1, 'x':1}

\>>> print_vector(**dict_vec)

<1, 0, 1>
```

- dictionary는 unordered이기 때문에 key값과 일치하는 함수 argument에 해당 값을 넣어 줌

- dictionary에 '*' operator를 사용하면 key가 랜덤하게 전달됨

```python
\>>> dict_vec = {'y':0, 'z':1, 'x':1}

\>>> print_vector(**dict_vec)

<1, 0, 1>

\>>> print_vector(*dict_vec)

<y, x, z>
```



## 5. Dictionary

## 5.1. Ordered Dictionary

- dictionary에서는 key가 추가된 순서를 기억하지 않음

- Key가 추가된 순서를 기억하는 dictionary → OrderedDict

- Built-in 데이터 타입이 아니고 collections. OrderedDict 에 정의되어 있음

```python
\>>> import collections

\>>> d = collections.OrderedDict(one=1, two=2, three=3)

\>>> d

OrderedDict([('one',1), ('two',2), ('three',3)])

\>>> d['four'] = 4

\>>> d

OrderedDict([('one',1), ('two',2), ('three',3), ('four',4])

\>>> d.keys()

odict_keys(['one','two','three','four'])
```



## 6. Emulating switch.case with dicts

- 파이썬에는 switch/case문이 없어 if/elif/else로 표현해야 함

```python
>>> if cond == 'cond_a':
... handle_a()
... elif cond == 'cond_b':
... handle_b()
... else:
... handle_default()
```

- 파이썬에서 함수는 first-class citizen

- Input condition을 키, 호출될 함수를 값으로 dictionary를 만들어 줌

```python
\>>> func_dict = {

... 'cond_a': handle_a,

... 'cond_b': handle_b,

... }

\>>> cond = 'cond_a'

\>>> func_dict[cond]

<function __main__.handle_a()>

\>>> func_dict[cond]()
```

- cond 값이 dictionary의 키에 있어야만 함. 없으면 KeyError exception 발생

→ if/elif/else에서 else 부분의 기능을 할 수 없음



- Default 케이스를 처리하기 위해 dictionary의 get 메소드를 사용

```python
\>>> func_dict.get(cond, handle_default)()
```



### 6.1. Example

- 같지만, 아래가 가독성이 좋음

```python
def plus(x,y):
  return x+y
def minus(x,y):
  return x-y
def multiply(x,y):
  return x*y
def divide(x,y):
  return x/y
def dispatch_if(operator, x, y):
  if operator == 'add':
    return plus(x,y)
  elif operator == 'sub':
    return minus(x,y)
  elif operator == 'mul':
    return multiply(x,y)
  elif operator == 'div':
    return div(x,y)
```

```python
def plus(x,y):
  return x+y
def minus(x,y):
  return x-y
def multiply(x,y):
  return x*y
def divide(x,y):
  return x/y
def default_op(x,y):
  Return None

func_dict = {
 'add':plus,
 'sub':minus,
 'mul':multiply,
 'div':divide,
}
def dispatch_dict(operator, x, y):
 return func_dict.get(operator, default_op)()
```

```python
def display_stuff(**kwargs):
 if kwargs is not None:
   
  

display_stuff(name='Jeff', passion='development', language='python')
{'passion':'development', 'name':'Jeff', 'language':'python'}
'''
 File "<ipython-input-60-ac84eb226d20>", line 3
    print kwargs
               ^
SyntaxError: Missing parentheses in call to 'print'. Did you mean print(kwargs)?
'''
```

