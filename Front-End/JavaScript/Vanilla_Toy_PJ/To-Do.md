# To-Do

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
  - todo.js
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
    <form id="todo-form">
      <input type="text" placeholder="Write a To Do and Press Enter" required />
    </form>
    <ul id="todo-list"></ul>
    <div id="quote">
      <span></span>
      <span></span>
    </div>
    
    <script src="js/greetings.js"></script>
    <script src="js/clock.js"></script>
    <script src="js/quotes.js"></script>
    <script src="js/background.js"></script>
    <script src="js/todo.js"></script>
  </body>
</html>
```

```javascript
```

![image-20220520151928582](C:\Users\hanju\TIL\image.assets\image-20220520151928582.png)