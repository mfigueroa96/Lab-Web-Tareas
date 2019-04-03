const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

const PROVIDERS = JSON.parse(fs.readFileSync('./providers.json')).providers;
const USERS = JSON.parse(fs.readFileSync('./users.json')).users;

app.use(cors({origin: ['http://localhost:3000']}));

function normalizeKey(key){
    return key.replace(/-/g, "");
}

app.get('/api/provider/:brand', (req, res) => {
    var brand = req.params.brand;
    var my_provider = null;

    my_provider = Object.assign({}, PROVIDERS.find(provider => provider.brand == brand));
    my_provider.tequilas.some(tequila => {
        delete tequila.uuid;
        delete tequila.alcohol_degrees;
        delete tequila.purity;
        delete tequila.date_of_release;
        delete tequila.distillation;
        delete tequila.year_of_distillation;
        delete tequila.place_of_distillation;
        delete tequila.serial_numbers;
    });


    res.send({ status: 200, my_provider, brand });
});

app.get('/api/tequila/:key', (req, res) => {
    var key = req.params.key;

    var found = false;
    var my_tequila = null;

    PROVIDERS.some(provider => {
        provider.tequilas.some(tequila => {
            if (tequila.serial_numbers.map(sn=>normalizeKey(sn)).includes(normalizeKey(key))) {
                my_tequila = Object.assign({}, tequila);
                delete my_tequila.serial_numbers;
                my_tequila.tequila_exists = true;
                found = true;
                return true;
            }
        });
        if (found) {
            my_tequila.brand = provider.brand;
            my_tequila.brand_uuid = provider.uuid;
            return true;
        }
    });

    res.send({ status: 200, my_tequila, key });
});

app.get('/api/user/:username', (req, res)=>{
    var username = req.params.username;

    var found = false;
    var history = [];
    var my_tequila = null;

    USERS.find(user => user.username == username).
    tequilas.some(tequisquiapan => {
        PROVIDERS.some(provider => {
            provider.tequilas.some(tequila => {
                if (tequila.serial_numbers.includes(tequisquiapan)) {
                    my_tequila = Object.assign({}, tequila);
                    delete my_tequila.serial_numbers;
                    found = true;
                    return true;
                }
            });
            if (found) {
                my_tequila.brand = provider.brand;
                history.push(my_tequila);
                my_tequila = null;
                found = false;
                return true;
            }
        });
    });

    res.send({ status:200, history, username });
});

app.listen(8080, (req, res) => console.log('Running'));