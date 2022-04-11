## 12-cookies
An example of cookie usage in express

### Running the application
  - `npm install`
  - `node index.js`

The application will be available at: `http://localhost:3000/`

### Test
  - Set cookies:
    Access `http://localhost:3000/cookieset` in a web browser. It should display
    `Cookies are set`
  - Get cookies:
    Access `http://localhost:3000/cookieget` in a web browser. It should display
    both `title` and `meta` cookies
  - Delete cookie:
    Access `http://localhost:3000/cookiedel` in a web browser. It should display
    `Cookie title deleted`
    To confirm it, you can access `http://localhost:3000/cookieget` again and
    check that there's only one cookie (`meta`) left.
