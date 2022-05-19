## true

- 1

---



## false

- 0

---



## null

- null은 자연스럽게 생기지 않음
- variable 안에 어떤것도 없다는 것을 확실히 알려주기 위해 씀

```javascript
const amIFat= null;
// amIFat에 아무것도 채워지지 않은 null 채우는것을 의미
let something;
console.log(amIFat);
```

![image-20220513180240250](C:\Users\hanju\TIL\image.assets\image-20220513180240250.png)

---



## Undefined

- something이라는 var을 만들었지만, 값을 주지 않은 상태
- 메모리 안에 공간은 있지만, 값은 없는 상태


```javascript
const amIFat= null;
let something;
// something이라는 var을 만들었지만, 값을 주지 않은 상태
// 메모리 안에 공간은 있지만, 값은 없는 상태
console.log(something);
```

![image-20220513180337087](C:\Users\hanju\TIL\image.assets\image-20220513180337087.png)