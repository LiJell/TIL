# Local Storage

- 개발자 콘솔을 들어가서 Application을 누르면 아래와 같은 화면을 확인할 수 있다

- Local Storage API를 이용해보자

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

  - ```javascript
    localStorage.setItem 을 확인해보자
    ```

  - ```javascript
    localStorage.getItem
    ```

  - ```javascript
    localStorage.removeItem
    ```

  

![image-20220519223121263](C:\Users\hanju\TIL\image.assets\image-20220519223121263.png)



```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Momentum</title>
  </head>
  <body>
    <form id="login-form">
      <input
        required
        maxlength="15"
        type="text"
        placeholder=" What is your name?"
      />
      <button>Log In</button>
      <!-- <input type="submit" value="Log In" /> -->
    </form>
    <h1 id = "greeting" class="hidden"></h1>

    <script src="app.js"></script>
  </body>
</html>

```

```javascript
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

//string 만 포함될 땐 대문자로 하는게 관습
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("username", username);
  // greeting.innerText = "Hello " + username; 아래와 동일하게 동작
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
```



- 이름을 입력하면 저장되는 것을 알 수 있다



![image-20220519223629685](C:\Users\hanju\TIL\image.assets\image-20220519223629685.png)

![image-20220519224110610](../../image.assets/image-20220519224110610.png)

- `localStorage.getItem("username")`을 하면 저장이되어있는 LiJell이 나온다
- localStorage를 비우고 다시 시도하면 `null`이라고 나온다

  - 이것을 활용해보자
- 반복되는 것을 paintGreetings라는 function을 만들고
- 아래에 조건문을 줘서 `null`일 때와 아닐 때 이벤트가 나뉘어서 나타나게 했다.

 ```javascript
 const loginForm = document.querySelector("#login-form");
 const loginInput = loginForm.querySelector("input");
 const greeting = document.querySelector("#greeting");
 
 //string 만 포함될 땐 대문자로 하는게 관습
 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username";
 
 
 
 
 function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   // greeting.innerText = "Hello " + username; 아래와 동일하게 동작
   paintGreetings(username);
 }
 
 
 function paintGreetings(username) {
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
 }
 
 const savedUserName = localStorage.getItem(USERNAME_KEY);
 
 if (savedUserName === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
 } else {
   paintGreetings(savedUserName);
 }
 
 ```

