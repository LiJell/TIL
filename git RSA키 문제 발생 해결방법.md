# git RSA키 문제 발생 해결방법

## 1. push나 clone을 할 경우 발생할 수 있음

#### 1.1. 원인

- 등록되지 않은 기기에서 clone이나 push가 일어나면 발생
- 유저의 ssh가 등록되지 않아 접근권한이 없어서 나오는 문제

- 본인은 D 드라이브에 폴더를 만들고 연결을 하려했더니 안돼서 SSH키를 만들어 등록하여 해결했다



#### 1.2. 해결방법

-  ssh키를 새로 생성하는 방법
- 다른 방법은 아직 모르겠다.. 공부하게되면 추가하겠음



## 2. SSH키 생성

#### 2.1. git bash를 킨다

![image-20220217001027312](C:\Users\hanju\TIL\image.assets\image-20220217001027312.png)

#### 2.2. keygen 생성

```bash
$ ssh-keygen -t rsa -C "git이메일"
```

- 이후 비밀번호를 설정해도 되고 
- 사실 그냥 비밀번호 무시하고 엔터만 쳐도 id_rsa.pub이 생성됐다고 나온다

![image-20220217001353133](C:\Users\hanju\TIL\image.assets\image-20220217001353133.png)

#### 2.3. ssd 번호 가져오기

- 위에 나와있는 경로를 따라 들어가서 .ssh의 폴더에 들어간다

  ![image-20220217001556015](C:\Users\hanju\TIL\image.assets\image-20220217001556015.png)

- 위 사진중 가온데 파일을 notpad로 연다
- 본인 사진에서는 id_rsa로 나와있지만 원래는 두번째 파일은 **id_rsa.pub**이 맞다
- 이후 notepad에 나오는 모든 정보를 복사해둔다



## 3. Github에 등록하기

#### 3.1. setting 으로들어가기

- 오른쪽 위 본인의 프로필 사진을 누르고 세팅으로 들어간다

![image-20220217001833452](C:\Users\hanju\TIL\image.assets\image-20220217001833452.png)



#### 3.2. SSH keys 들어가기

- 왼쪽화면, Access >> SSH and GPG keys 로 들어가기

![image-20220217001945375](C:\Users\hanju\TIL\image.assets\image-20220217001945375.png)



#### 3.3. SSH 등록

- New SSH key를 선택하고
- 아래 화면에 메모장에서 복사해둔 모든 정보를 Key에 붙여넣는다
- Title은 마음대로
- Add SSH key 

![image-20220217002134213](C:\Users\hanju\TIL\image.assets\image-20220217002134213.png)



## 4. 끝

- 이제 Clone 또는 push를 하면 해결될것이다 
