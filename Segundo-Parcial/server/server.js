const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

const PROVIDERS = JSON.parse(fs.readFileSync('./providers.json')).providers;
const USERS = JSON.parse(fs.readFileSync('./users.json')).users;

app.use(cors({origin: ['http://localhost:3000']}));

app.get('/api/tequila/:key', (req, res) => {
    var key = req.params.key;

    var found = false;
    var my_tequila = null;

    PROVIDERS.some(provider => {
        provider.tequilas.some(tequila => {
            if (tequila.serial_numbers.includes(key)) {
                my_tequila = Object.assign({}, tequila);
                delete my_tequila.serial_numbers;
                found = true;
                return true;
            }
        });

        if (found) return true;
    });

    res.send({ status: 200, my_tequila, key });
})

app.listen(8080, (req, res) => console.log('Running'));