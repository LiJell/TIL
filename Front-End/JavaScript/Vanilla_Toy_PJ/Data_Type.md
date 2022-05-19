# Data Type
## Array

```javascript
const daysOfWeek = ['mon','tue','wed','thu','fri','sat'];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push('sun');

console.log(daysOfWeek);
```

![image-20220517010008395](C:\Users\hanju\TIL\image.assets\image-20220517010008395.png)

## Object

```javascript
const player = {
  name: "LiJell",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["points"]);
```

![image-20220517010250483](C:\Users\hanju\TIL\image.assets\image-20220517010250483.png)

```javascript
const player = {
  name: "LiJell",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["points"]);


player.fat = false;
console.log(player);
```

![image-20220517010834138](../../image.assets/image-20220517010834138.png)

- const를 바꿀 수 없지만, const 안의 Object를 변경하는 것이기 때문에 부분 수정이 가능하다

  - 하지만, const 전체를 바꾸려하면 에러가 생김
  - Object 추가도 가능

  
