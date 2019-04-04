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

    // my_provider = Object.assign({}, PROVIDERS.find(provider => provider.brand == brand));
    my_provider = JSON.parse(JSON.stringify(PROVIDERS.find(provider => provider.brand == brand)));
    if( my_provider.tequilas !== undefined ) {
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
    }else{
        my_provider = null
    }

    res.send({ status: 200, my_provider, brand });
});

app.get('/api/tequila/:key', (req, res) => {
    var key = req.params.key;

    var found = false;
    var my_tequila = null;

    PROVIDERS.some(provider => {
        provider.tequilas.some(tequila => {
            var founded = tequila.serial_numbers.find(tequilyta => normalizeKey(tequilyta) == normalizeKey(key));
            if ( founded !== undefined ){
                my_tequila = JSON.parse(JSON.stringify(tequila));
                delete my_tequila.serial_numbers;
                my_tequila.tequila_exists = true;
                found = true;
                key = founded;
                return true;
            }
        });
        if ( found ) {
            my_tequila.brand = provider.brand;
            my_tequila.brand_uuid = provider.uuid;
            return true;
        }
    });

    res.send({ status: 200, my_tequila, key });
});

app.get('/api/user/:username', (req, res)=>{
    var username = req.params.username;
    var sortby = req.query.sort;

    var found = false;
    var history = [];
    var my_tequila = null;

    var my_user = USERS.find(user => user.username == username);
    if( my_user !== undefined ) {
        my_user.tequilas.some(tequisquiapan => {
            PROVIDERS.some(provider => {
                provider.tequilas.some(tequila => {
                    if (tequila.serial_numbers.includes(tequisquiapan.serial_num)) {
                        my_tequila = JSON.parse(JSON.stringify(tequila));
                        delete my_tequila.serial_numbers;
                        my_tequila.my_serial = tequisquiapan.serial_num;
                        my_tequila.date_of_purchase = tequisquiapan.date_of_purchase;
                        found = true;
                        return true;
                    }
                });
                if (found) {
                    my_tequila.brand = provider.brand;
                    my_tequila.brand_uuid = provider.uuid;
                    history.push(my_tequila);
                    my_tequila = null;
                    found = false;
                    return true;
                }
            });
        });
        /*
        Cases:
        0 -> Date of purchase
        1 -> Date of release
        2 -> Brand (alphabetically)
        3 -> Name (alphabetically)
        4 -> Distillation (alphabetically)
         */
        switch ( parseInt(sortby) ) {
            case 0:
                history.sort((a, b) => {
                    if (new Date(a.date_of_purchase) > new Date(b.date_of_purchase))
                        return 1;
                    if (new Date(a.date_of_purchase) < new Date(b.date_of_purchase))
                        return -1;
                    return 0;
                });
                break;
            case 1:
                history.sort((a, b) => {
                    if (new Date(a.date_of_release) > new Date(b.date_of_release))
                        return 1;
                    if (new Date(a.date_of_release) < new Date(b.date_of_release))
                        return -1;
                    return 0;
                });
                break;
            case 2:
                history.sort((a, b) => {
                    if (a.brand > b.brand)
                        return 1;
                    if (a.brand < b.brand)
                        return -1;
                    return 0;
                });
                break;
            case 3:
                history.sort((a, b) => {
                    if (a.name > b.name)
                        return 1;
                    if (a.name < b.name)
                        return -1;
                    return 0;
                });
                break;
            case 4:
                history.sort((a, b) => {
                    if (a.distillation > b.distillation)
                        return 1;
                    if (a.distillation < b.distillation)
                        return -1;
                    return 0;
                });
                break;
        }
        history.some( tequila => {
            tequila.date_of_purchase = toEs(tequila.date_of_purchase);
            tequila.date_of_release = toEs(tequila.date_of_release);
        });
    }else{
        history = null;
    }

    res.send({ status:200, history, username });
});

function toEs(enStr) {
    var esStr = enStr.replace(/Mon/g, "Lun")
        .replace(/Tue/g, "Mar")
        .replace(/Wed/g, "Mie")
        .replace(/Thu/g, "Jue")
        .replace(/Fri/g, "Vie")
        .replace(/Sat/g, "Sab")
        .replace(/Sun/g, "Dom")

        .replace(/Jan/g, "Ene")
        .replace(/Apr/g, "Abr")
        .replace(/Aug/g, "Ago")
        .replace(/Dec/g, "Dic")
        .split(" ");
    return esStr[0] + " " + esStr[2] + " " + esStr[1] + " " + esStr[3];
}

app.listen(8080, (req, res) => console.log('Running'));