## 03-http-codes
A demonstration of the most common HTTP response codes

### Running the application
  - `npm install`
  - `node index.js`

The application will be available at: `http://localhost:3000/`

### Test
  - 200 OK:
    ```
    curl -I http://localhost:3000/
    Expected response: HTTP/1.1 200 OK
    ```
  - 201 - Created:
    ```
    curl -I -X POST http://localhost:3000/addpost
    Expected response: POST request to /
    ```
  - 301 - Moved Permanently:
    ```
    curl -I http://localhost:3000/home
    Expected response: HTTP/1.1 301 Moved Permanently
    ```
  - 302 - Found
    ```
    curl -I http://localhost:3000/login
    Expected response: HTTP/1.1 302 Found
    ```
  - 400 - Bad Request:
    ```
    curl -I http://localhost:3000/asdjhIEIasncA:::
    Expected response: HTTP/1.1 400 Bad Request
    ```
  - 401 - Unauthorized:
    ```
    curl -I http://localhost:3000/user
    Expected response: HTTP/1.1 401 Unauthorized
    ```
  - 403 - Forbidden:
    ```
    curl -I http://localhost:3000/secret
    Expected response: HTTP/1.1 403 Forbidden
    ```
  - 500 - Internal Server Error:
    ```
    curl -I http://localhost:3000/oops
    Expected response: HTTP/1.1 500 Internal Server Error
    ```
  - 404 - Not Found
    ```
    curl -I http://localhost:3000/aaabbb
    Expected response: HTTP/1.1 404 Not Found
    ```
