# Angular Files

- In Angular, each component has at least 4 files that work in harmony together.
  - app.component.css
  - app.component.html
    - **the view**
      - HTML file that receives variables from the component and displays them
  - app.component.ts
    - **the component**
      - where variables are declared and modified
  - app.module.ts

---

- **COMPONENT**

```typescript
name = "Lime Jelly";
```

- **VIEW**

```typescript
Hello, {{name}}!
```

- **Result**

`Hello, Lime Jelly`

---

- The double curly braces around {{name}} demonstrates what we call **interpolation**. **Interpolation** is the insertion of variable content from the component into the view.