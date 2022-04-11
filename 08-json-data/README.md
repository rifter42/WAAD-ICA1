## 08-json-data
An example of accepting JSON data in express

### Running the application
  - `npm install`
  - `node index.js`

The application will be available at: `http://localhost:3000/`

### Test
    curl -d "id=1&title=title1" -X POST http://localhost:3000/posts
    Expected response: {"id":"1","title":"title1"}
