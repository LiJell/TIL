# New CSS

## color-mix 

```css
.container {
    background-color: color-mix(red 30%, blue 70%);
}
```

```css
:root {
    --brandColor: blue;
}
.container {
    background-color: color-mix(var(--brandColor) 50%, White 10%);
}
```

---

## accent-color

```css
/* tint everthing */
:root {
    accent-color:hotpink;
}

/* tint one element */
progress {
    accent-color: indigo;
}
```

---

## color-contrast
- browser will choose a great combination of colors for us 

```css
.box {
    background-color: red;
    color: color-contrast(red);
}
```

- You can give some color options as well

```css
color: color-contrast(blue vs pink, yellow, green)
```

- If you typed just like above, browser will select the best matching color among pink, yellow, and green to see who has the best contrast against background of color, blue.

---

## inert

- Actually HTML attribute. 
- `inert` allows you to basically freeze sections of your page
  - any html element with the `inert` attribute will not receive any events interactions nothing  from user
- if you want to freeze a button after the user clicked it once or you are sending a form and you don't want the user to click anywhere else you can freeze the whole form by adding the `inert` attribute to the form html element.

```html
<form inert>
    <input type="..."/>
    <button>
        save
    </button>
</form>
```

---

## :has()

- It allow you to style a parent depending if it contains a specific child
- It could only a style a child if it was inside of a parent

```
form > button
```

- we could apply styles to a button if it was inside of a `form`
  - but we couldn't add a styles to the form if it contained a `button`

- `:has()` completely fixes this 

```css
form:has(button) {   
}

a:has(> img) {
}
```

- now you can add styles to a list item if the list item contains a link 
  - or you can change the way a link looks like if  the link is around an image

- You can change the style of a form if the form has a button and the button has the mouse on top of it

```css
form:has(button:hover) {
}
```

---

## Viewport Units

- viewport is the area or the window from which the website is being seen
- `vw` : viewport width
- `vh` : viewport height 
- `dvh` : **dynamic** viewport height
- `lvh` : **largest** viewport height
- `svh` : **smallest** viewport height

---

- Since you cannot resize windows in mobile
  - 100 vh will give you the total height of the screen
  - 100 vw will give you the total width of the screen
- `lvh` - when navigation bar is not existed
- `svh` - when navigation bar is existed
- `dvh` - depending on when navigation bar is shown or not

---

## @nest

```css
nav {
    ...;
}
nav {
    ...;
}
nav ul li {
    ...;
}
```

- if you use `@nest` then 

```css
nav {
    & ul {
        & li {
        }
    }
}
```

- you can use `@nest` like this as well

```css
.foo {
    color: red;
    @nest : not(&) {
        color: blue;
    }
}
```

- is equal to

```css
.foo {
    color: red;
}
:not(.foo) {
    color: blue;
}
```

---

## @scope
- Easy to isolate and control it better!
```css
@scope (header) {
    .title {
        font-size: 36px;
    }
    nav {
        display: flex;
    }
}
@scope (aside) {
    .title {
        font-size: 28px;
    }
    nav {
        display: grid;
    }
}
```

---

## @container

```css
header {
    container-type: inline-size;
    container-name: header-container;
}

@container header-container (min-width: 600px) {
    nav {
        display: flex;
    }
}
```

---

## custom-media

```css
@custom-media --darkMode (prefers-color-scheme: dark);
@custom-media --lightMode (prefers-color-scheme: light);
@custom-media --landscape (orientation: landscape);
@custom-media --portrait (orientation: portrait);
@custom-media --iphone (max-device-width: 480px);
```

```css
@media (--darkMode) and (--portrait) and (--iPhone) {
    body {
        ...;
    }
}
```



