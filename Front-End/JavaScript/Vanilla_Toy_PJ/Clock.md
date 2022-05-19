# Clock

- `setInterval`: 일정 기간마다 `function`이 동작 하게함
- `setTimeout`:  interval과 비슷하지만 동작을 다르게함 
- `new Date()`: 날짜를 가져옴
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  - date 관련 내용

![image-20220519235955400](C:\Users\hanju\TIL\image.assets\image-20220519235955400.png)

## 폴더 구조

- Vanilla_JS_Toy
  - css
    - style.css
  - js
    - clock.js
    - greetings.js
  - index.html

---

## Interval

```javascript
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// argument 1: function that I want to run, argument 2: how often (ms)
setInterval(sayHello, 5000);
```

## Timeout

```javascript
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

// argument 1: function that I want to run, argument 2: how often (ms)
// setInterval(sayHello, 5000);
setTimeout(sayHello, 5000);
```

---

## Clock 만들기

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Momentum</title>
  </head>
  <body>
    <form id="login-form" class="hidden">
      <input
        required
        maxlength="15"
        type="text"
        placeholder=" What is your name?"
      />
      <button>Log In</button>
      <!-- <input type="submit" value="Log In" /> -->
    </form>
    <h2 id="clock">00:00:00</h2>
    <h1 id="greeting" class="hidden"></h1>
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
  </body>
</html>

```

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// argument 1: function that I want to run, argument 2: how often (ms)
getClock();
setInterval(getClock, 1000);
```

- 시계는 잘 동작하지만, 1초일 때 00:00:01 이 아니라, 00:00:1으로 나온다
- 수정해보자
  - `padStart`를 사용해보자
    - `padEnd`는 뒤에 붙여줌
  - 길이가 2가 아닐 때 "0"을 앞에 넣어줘
  - 하지만 string만 가능하다

![image-20220520001207803](C:\Users\hanju\TIL\image.assets\image-20220520001207803.png)

- 아래처럼 수정

![image-20220520001727261](../../image.assets/image-20220520001727261.png)

---

## 수정본

```javascript
const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// argument 1: function that I want to run, argument 2: how often (ms)
getClock();
setInterval(getClock, 1000);
```

