require('dotenv').config();
const express = require('express');
const massive = require('massive');
const authCtrl = require('./controller');
const session = require('express-session')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 60 * 24 * 14},
    secret: SESSION_SECRET
}));


//ENDPOINTS
//Auth:
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
// app.delete('/auth/logout', authCtrl.logout)
// app.get('/auth/user', authCtrl.getUser)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is now connected')
    app.listen(SERVER_PORT, () => console.log(`Helo Server is listening on port ${SERVER_PORT}`))
}).catch(error => console.log(error, 'Database not working...'))


