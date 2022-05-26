# Custom Types

- You can create your OWN types and use them the same way just like others
- For this, you need to create an **interface**
  - data structure that defines the shape of data

```typescript
interface Order {
  customerName: string,
  itemNumbers: number[],
  isComplete: boolean
}
```

- The interface keyword is used to initialize an interface, which shows us the SHAPE of the data that’s coming.
  - Think of an interface like a factory mold. This interface is used to stamp out Order types for a store.

```typescript
let order1: Order;
order1 = {
  customerName: "Abiye",
  itemNumbers: [123,44,232],
  isComplete: false
}
```

- It MUST have each of those fields in order to fulfill the **contract** of the interface. 

- An interface **contract** is simply the list of fields in that interface that any variable needs if it wants to use that type. All of the normal fields within an interface must be implemented in any variable that uses that type.

---

## Optional Fields in Interfaces

-  Optional fields are not part of the strict interface contract. You can omit them when creating an instance of that interface.

```typescript
interface Order {
  customerName: string,
  itemNumbers: number[],
  isComplete?: boolean
}
```

- Notice **the question mark** after `isComplete`. **isComplete?** means that we can omit that value and the code will still compile. This is useful for fields within an interface that are not mandatory.

```typescript
let order1: Order;
order1 = {
  customerName: "Abiye",
  itemNumbers: [123, 44, 232]
}
```

- Order1 only has 2 fields now and it still compiles because isComplete is an optional field.

---

- Optional fields are helpful when getting data from a database or an API call where some fields may be missing or incomplete.

---



