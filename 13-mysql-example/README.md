## 13-mysql-example
An example of using MySQL database in express

### Running the application
  - `npm install`
  - `node index.js`

The application will be available at: `http://localhost:3000/`

*Warning: this application requires setting environment variables and a running
MySQL database*

### Test
    curl -d "id=1&title=title1" -X POST http://localhost:3000/posts
    Expected response: Post is created

Check the databse and table `posts`. (For example, `SELECT * from posts;`)
The data that was sent in the post request should be there. 
