# Randomness

## 폴더 구조

Vanilla_JS_Toy

- css
  - style.css
- js
  - clock.js
  - greetings.js
  - quotes.js
- index.html

---



- math module을 이용하여 array에서 random한 값을 뽑아보자
- `Math.random() * 10`을 하면 0~ 10까지의 random한 값을 얻을 수 있다

![image-20220520004651473](C:\Users\hanju\TIL\image.assets\image-20220520004651473.png)

- 지금은 `float`이기 때문에 뒤에 소수점이 있다
  - 소수점을 지우는 3가지 방법이 있다
    - `Math.round()`: 반올림
    - `Math.ceil()`: 올림
    - `Math.floor()`: 내림

![image-20220520004934221](C:\Users\hanju\TIL\image.assets\image-20220520004934221.png)

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
  </body>
</html>
```

```javascript
const quotes = [
  {
    quote:
      "We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    author: "Ellen Ullman",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
  },
  {
    quote:
      "Rules of Optimization: Rule 1: Don't do it. Rule 2 (for experts only): Don't do it yet.",
    author: "Michael A. Jackson",
  },
  {
    quote:
      "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
    author: "Andy Hunt",
  },
  {
    quote:
      "One of the best programming skills you can have is knowing when to walk away for a while.",
    author: "Oscar Godson",
  },
  {
    quote:
      "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.",
    author: "Steve McConnell",
  },
  {
    quote:
      "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
    author: "Tom Cargill",
  },
  {
    quote:
      "Good code is its own best documentation. As you're about to add a comment, ask yourself, “How can I improve the code so that this comment isn't needed?” Improve the code and then document it to make it even clearer.",
    author: "Steve McConnell",
  },
  {
    quote:
      "One of my most productive days was throwing away 1000 lines of code.",
    author: "Ken Thompson",
  },
  {
    quote: "The computer was born to solve problems that did not exist before.",
    author: "Bill Gates ",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
```

