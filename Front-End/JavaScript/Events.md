# Events

```javascript
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked!");
}

title.addEventListener("click", handleTitleClick);
```

![image-20220517173714140](C:\Users\hanju\TIL\image.assets\image-20220517173714140.png)

- 클릭하면

![image-20220517173728325](C:\Users\hanju\TIL\image.assets\image-20220517173728325.png)

---



## 추가해보기
- console에서 변화를 확인해보세요!

- 다양한 이벤트를 링크를 통해 확인해보세요

  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

  

```javascript
const h1 = document.querySelector("div.hello:first-child h1");
// properties를 찾을 땐 console.dir 를 이용하고 browser console에서 확인하는 방법이 좋음
function handleTitleClick() {
  h1.style.color = "blue";
  console.log("title was clicked!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("WIFI is On")
}

h1.onclick = handleTitleClick;
// event listener을 사용하면 나중에 remove하기 편함 .removeEventListener
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
```

