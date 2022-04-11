## 05-get-query
An example of GET query in express

### Running the application
  - `npm install`
  - `node index.js`

The application will be available at: `http://localhost:3000/`

### Test
    ```
    curl  http://localhost:3000/post/1
    Expected response: You're viewing post number 1
    ```

    ```
    curl  http://localhost:3000/posts?id=1
    Expected response: You're viewing post number 1
    ```
