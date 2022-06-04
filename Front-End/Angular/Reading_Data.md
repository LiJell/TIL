# Reading Data

## Data's Long Journey

![image-20220604225314214](C:\Users\a\TIL\image.assets\image-20220604225314214.png)

### A simplified typical data flow from back to front would be

1. Data retrieved from database query
2. Data routed through server
3. Data reaches **service**
4. Data reaches component
5. Data reaches view

---

- Databases are most often the place where data is stored for web applications. We will eventually get there.

---



## Introduction to Angular Services

- **Services** are special files in Angular that are used to manage data.
  - They usually pull data from XHR (remember XML/HTTP Requests from Module 1?), but they can also store data on their own.
- No need to go all the way to the database to get the data.
  - What we need to is that simply push the data back into a service and let it live there for now.

- let's see a diagram shows a simple flow between a component, a service with data, and an HTML view.

![image-20220604231335624](C:\Users\a\TIL\image.assets\image-20220604231335624.png)

1. The cars component makes a call to the transportation service, which holds a list of cars
2. The transportation service returns a list of cars to the cars component
3. The cars view receives the list of cars and loops over them using *ngFor

---

- A service is like a 'brain' in an Angular app that either returns data from the service itself or data retrieved from an external source. It can be viewed as a 'data manager'.
