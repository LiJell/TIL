# Angular Events

## Event Binding

- When we wanted to actually change some data or respond to user events, event binding comes into play
- Browser based events in Angular are typically tied to methods within their corresponding components. 

---

- app.component.html

```html
<button (click)="saySomething()"> Say Something </button>
```

- app.component.ts

```typescript
saySomething() {
  alert('good day.');
}
```

---

- Here we have inserted a click handler on a button that fires whenever a click event occurs. 
- This triggers the "saySomething()" method in the component.
- In Angular, the parentheses around an event handler within an html tag signify what we call "event binding"
  - In this instance, "click" is bound with the parentheses to be (click), which binds that event to the method passed in the quotes, which is "saySomething()".

---

- Note that you must use the **()** after **saySomething()** to trigger the method in the corresponding app.component.ts file. This is because Angular not only binds the action to the event, it also fires the event when clicked, similar in execution context to JavaScript’s native "call" method. The () after the method symbolizes the triggering of the event once that button is clicked.

---



## Event Updating a String

- Let's make a button that triggers updating a string

---

- app.component.html

```html
<div class="display">
  {{phrase}}
</div>
<button (click)="update()"> click me </button>
```

- app.component.ts

```typescript
phrase = "It's going";
update() {
  this.phrase+=" ..and going";
}
```

---

- The result is that the phrase keeps getting longer and longer and longer every time we click the button.

---

- Events are a core part of any Angular project. 
- In fact, events are really key to all of the TypeScript and JavaScript frameworks and most applications that use JavaScript in general.