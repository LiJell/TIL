# Arrays and Iteration

## Iterating through String Arrays

- We can use the ***ngFor** command in the HTML file to loop through arrays declared in the component.
  - ng is stand for `next generation`

---

- Component

```typescript
colors:string[] = ['red', 'blue', 'green', 'purple'];
```

- HTML

```html
<div *ngFor='let color of colors'>
    {{color}}
</div>
```



- The result in your browser
  - red
  - blue
  - green
  - purple

---



## Iterating with Indices

- Having access to an index within each iteration of the loop

```html
<div *ngFor = 'let fruit of fruits; let i=index'>
    Fruit {{ i }} is {{ fruit }}
</div>
```

- The result in your browser
  - Fruit 0 is apple
  - Fruit 1 is orange
  - Fruit 2 is pear
  - Fruit 3 is peach

- Note that our 'iterator' variable is named `i`. This variable can be named anything, but `index` keyword cannot be changed

---



## Iterating through Custom Types

- connect interfaces with *ngFor looping machanism
- Let's make an interface for a Car and put it in its own file called car.ts (**.ts** is the extension for TypeScript files)

```typescript
export interface Car {
    make: string;
    model: string;
    miles: number;
}
```

- Now that we have a Car interface, we can import that interface into our component

```typescript
import { Car } from './car';
```

- Now we can create 3 entities of the Car type

```typescript
subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
honda: Car = {make: 'Honda', model: 'Accord', miles: 39393};
bmw: Car = {make: 'BMW', model: 'X3', miles: 4400};
cars:Car[ ] = [this.subaru, this.honda, this.bmw];
```

- loop through all of cars in the HTML file

```html
<div *ngFor="let car of cars">
   {{car.make}} {{car.model}}  with a mileage of {{car.miles}}
</div>
```

- output
  - Subaru Outback with a mileage of 58232
  - Honda Accord with a mileage of 39393
  - BMW X3 with a mileage of 4400