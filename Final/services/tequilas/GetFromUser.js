const express = require('express');
const cors = require('cors');
const firebase = require('firebase-admin');
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');
const config = require('../config');
const Tequila = require('../models/Tequila');
const tequilaSchema = require('../schemas/Tequila');
const serviceAccount = require('../ServiceKey.json');

const app = express();
app.use(cors({ origin: '*' }));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const tequilasRef = db.ref('tequilas');

const schema = buildSchema(`
    ${tequilaSchema}

    type Query {
        tequila(key: [String], order: Int): [Tequila]
    }
`);

const values = {
    tequila: (args) => {
        var keys = [...args.key];
        console.log('TEQUILA_FROM_USER_ARGS', keys);
        return tequilasRef.once('value').then(snapshot => {
            var tequilas = snapshot.val();
            var response = []
            for (const tequilaKey in tequilas) {
                for (const num of tequilas[tequilaKey].serial_numbers) {
                    if (keys.indexOf(num) >= 0) {
                        var tequila = {...tequilas[tequilaKey]};
                        
                        tequila.uuid = tequilaKey;
                        tequila.url = num;
                        console.log('THE_TEQUILA', tequila)
                        response.push(tequila);
                    }
                }

                // if (keys.includes(tequilaKey)) {
                //     var temp = {...tequilas[tequilaKey]};
                //     temp.uuid = tequilaKey;
                //     response.push(temp);
                // }
            }

            /*
            Cases:
            0 -> Date of purchase
            1 -> Date of release
            2 -> Brand (alphabetically)
            3 -> Name (alphabetically)
            4 -> Distillation (alphabetically)
            */

            switch (args.order) {
                case 0:
                    response.sort((a, b) => {
                        if (new Date(a.date_of_release) > new Date(b.date_of_release))
                            return 1;
                        if (new Date(a.date_of_release) < new Date(b.date_of_release))
                            return -1;
                        return 0;
                    });
                    break;
                case 1:
                    
                    break;
                case 2:
                    response.sort((a, b) => {
                        if (a.brand > b.brand)
                            return 1;
                        if (a.brand < b.brand)
                            return -1;
                        return 0;
                    });
                    break;
                case 3:
                    response.sort((a, b) => {
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
            
            console.log('RESPONSE', response)
            return response
        })
    }
}

app.get('/graphql', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))

const PORT = config.ports.getUserTequilas;
app.listen(PORT, console.log(`Running Get Provider Tequilas @ ${PORT}`));