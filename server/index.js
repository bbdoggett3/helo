require('dotenv').config();
const express = require('express');
const massive = require('massive');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());


//ENDPOINTS


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


