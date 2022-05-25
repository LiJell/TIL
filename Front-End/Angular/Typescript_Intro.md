# Intro Typescript

## Basic of TypeScript

### Strings in TypeScript

- Variables in TypeScript can be **statically typed**
  - must always retain the data type that they start out with
- Once a variable is statically typed as a string, it cannot hold any other data type

```typescript
let name: string = 'Fred'
```

```typescript
let shoeColor: string = 'blue';
console.log(shoeColor);
```

- It is possible to change variable values over time

```typescript
sheColor = 'red';
console.log(shoeColor);
// will be 'red'
```

---



### Numbers in TypeScript

```typescript
let seatCount: number = 42;
```

- TypeScript does not designate between integers and floating point or decimal numbers like other languages when it comes to typing. Initializing a decimal number is just like initializing an integer:

```typescript
let registrationPercentage: number = 92.87;
```

- Note that `registrationPercentage` will always have to be of a number type. If you were to try to reassign `registrationPercentage` to a string value in another line of that program, the program would not compile, and your text editor would most likely throw an error.

```typescript
registrationPercentage = 'Ninety Two';

// WILL CAUSE AN ERROR because registrationPercentage is statically typed as a number.
```

---



### Booleans in TypeScript

- **Boolean** values are either true or false. In TypeScript, you can declare and statically type a variable without initializing it with a value. For example:

```typescript
let isRegistered: boolean;
```

- If you try to use `isRegistered` at this point in the program, however, you will get an error. Some programmers declare variables and type them without initializing them because the value of the variable is completely unknown at the start of the program. Later, you can assign it.

```typescript
isRegistered = false;
console.log(isRegistered); // false
```

- **Enum** values in Typescript are collections of constants. Think of an Enum as a type of fixed array of things that you use as a reference

- The number of elements never changes during the run of the program and the order of elements doesn’t change either.

```typescript
enum spiceLevel {
  NONE = "no spice",
  LOW = "barely spicy",
  MEDIUM = "medium spicy",
  HIGH = "hot"
}

console.log(spiceLevel.MEDIUM); 
// outputs "medium spicy"
```

- Modern Integrated development environments ( IDEs ) like Visual Studio Code help you complete `enum` values and other coding constructs by using autocomplete. `Enums` help to ensure that commonly used constants in your program are all consistent. This helps to avoid typos and general errors.

---



### The 'any' Type in TypeScript

- The `any` type is essentially a wild card

```typescript
let userData: any;
```

- `userData` will now be a container that can hold any data type. Once `userData` is initialized, however, it will infer the type from the value given to it.

```typescript
let userData: any;

userData = 22;
console.log(userData + 2);
// logs 24

userData = "free";
console.log(userData + "man");
// logs "freeman";
```

- Note that with an **any** data type, even though the type is inferred upon assignment, you can re-assign the variable to another data type and it still works.
- Using it when you might be accepting variable data that could conceivably be of any data type, such as getting user data from a server

---

- **Any** types not only accommodate data from any source, but they also signal to other developers the fact that **this particular variable is of an unknown type** and that the data should be handled with care.

---

