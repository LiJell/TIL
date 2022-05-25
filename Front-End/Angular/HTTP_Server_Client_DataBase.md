# HTTP

## XHR

- Request
- Response

---

- In a restaurant, the food request comes from the dining room, or the front-end
- The customer makes a request to the kitchen. In web applications, this typically comes in the form of an **XML/HTTP Request** or an **XHR**.

- XML is replaced by JSON in most instances now

---



## HTTP stand for

- **HyperTextTransfer Protocol**
  - the foundation of all communication on the web 

- You can analyze XHR for any website in the browser's network tap in Chrome developer tools

---



## The Request / Response Cycle

- After the customer makes a request, it is received by the kitchen, or the **web application server**.
- The web application server then analyzes the request and decides whether or not it can fulfill that order.
  - If the order is able to be fulfilled, then the kitchen staff will often reach into the database (the fridge), pull the data (the food), prepare the data, and then send the data back to the customer.

![image-20220525214842560](C:\Users\hanju\TIL\image.assets\image-20220525214842560.png)

- This represents a very simple request/response cycle. A request is made to the web application server, analyzed, and either rejected or accepted.

---



## Error Codes

- XML/HTTP requests can be rejected by the server
- If rejected, the web application server sends an HTTP response back to the client (the front-end).
  - 400 level status generally indicate an issue with the request itself
  - 500 level status codes generally indicate an error on the back-end
    - **404** (not found)
    - **403** (forbidden)
    - **401** (not authorized)
    - **500** (internal server error)
    - **503** (service unavailable)

- **Server** and **client** are very common terms in computing. 
  - The "server" in full stack development typically refers to web application server, and the client refers to any device that is interacting with the server on the front-end. 
  - Common clients include laptop and desktop computers, mobile phones, GPS systems in cars, voice-driven devices like Amazon Alexa, Siri and Google Home, video game consoles, smart watches, and anything else that connects to a back-end.

---



## HTTP Success Codes

- All of the 200 level codes are generally positive status codes
  - **200** (ok)
  - **201** (created)
  - **202** (accepted), etc.
- If the initial request has been accepted by the web application server, and there is a need to retrieve data related to the request, the web application server then queries a database or databases to get the information needed to send back to the user.
- The database sends the result of the query back to the web application server, and then the web application server usually formats the data into a format to be sent back to the front-end. 
  - **JSON** (JavaScript Object Notation) is a very common format currently used to send data to clients (the front-end).

