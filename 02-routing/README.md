## 02-routing
An example of different ways to work with routes in express

### Running the application
  - `npm install`
  - `node app.js`

The application will be available at: `http://localhost:3000/`

### Test
  - GET-request to /:
    ```
    curl http://localhost:3000/
    Expected response: GET request to /
    ```
  - POST-request to /:
    ```
    curl -X POST http://localhost:3000/
    Expected response: POST request to /
    ```
  - All methods request:
    ```
    curl http://localhost:3000/ping
    Expected response: pong
    ```
  - Wildcard route:
    ```
    curl http://localhost:3000/hellodsfbsdcjidfworld
    Expected response: GET request to /hellodsfbsdcjidfworld
    ```
  - Multiple options route:
    ```
    curl http://localhost:3000/hello
    Expected response: GET request from /hello or /hi or /hey
    ```
