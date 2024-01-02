# auth_system_node

### About

>A simple CRUD authentication system using Node.js.\
>It uses bcrypt to encrypt the password and store it in a database.\
>Cookie-parser is for keep the session alive.

---

### Dependencies
```
express;
body-parser;
dotenv;
cookie-parser;
bcrypt;
```

---

### Setup
Using npm:

```bash
$ npm init -y
```


Create .env file using GitBash:

```bash
$ touch .env
```

```javascript
PORT = 3000 
IP = '127.0.0.1'
```
---

### Routes
```javascript
//GET Routes
'/';
'/register';
'/login';

//POST Routes
'/auth/register';
'/auth/login';
```

---

### Register Body
```json
{
    "name": "username",
    "email": "email",
    "password": "password",
    "password_confirm": "password"
}
```
### Login Body
```json
{
    "email": "email",
    "password": "password",
}
```

---