## 04-http-methods
A demonstration of the most common HTTP request methods

### Running the application
  - `npm install`
  - `node app.js`

The application will be available at: `http://localhost:3000/`

### Test
  - GET:
    ```
    curl  http://localhost:3000/post/1
    Expected response: You're viewing post number 1
    ```
  - POST:
    ```
    curl -X POST http://localhost:3000/posts
    Expected response: You've added a post!
    ```
  - PUT:
    ```
    curl -X PUT http://localhost:3000/post/1
    Expected response: Post number 1 was updated
    ```
  - DELETE:
    ```
    curl -X DELETE http://localhost:3000/post/1
    Expected response: Post number 1 was deleted
    ```
  - PATCH:
    ```
    curl -X PATCH http://localhost:3000/post/1
    Expected response: You've updated the following parameters 1
    ```
