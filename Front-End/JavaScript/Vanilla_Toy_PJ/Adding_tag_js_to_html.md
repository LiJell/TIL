# Adding tag js to html

## 폴더 구조

Vanilla_JS_Toy

- css
  - style.css
- img
  - 0.jpg
  - 1.jpg
  - 2.jpg
  - 3.jpg
  - 4.jpg
- js
  - clock.js
  - greetings.js
  - quotes.js
  - background.js
- index.html

---



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
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
  </body>
</html>
```

- javascript에서 `img` 태그를 추가해보자

```javascript
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

// tag adding
document.body.appendChild(bgImg);
// 가장 아래에 추가
//document.body.prepend(bgImg); 가장위에
//동일하게 동작
```

