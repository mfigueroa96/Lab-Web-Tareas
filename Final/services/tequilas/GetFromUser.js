const express = require('express');
const cors = require('cors');
const firebase = require('firebase-admin');
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');
const config = require('../config');
const Tequila = require('../models/Tequila');
const tequilaSchema = require('../schemas/Tequila');

const app = express();
app.use(cors({ origin: '*' }));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const tequilasRef = db.ref('tequila');

const schema = buildSchema(`
    ${tequilaSchema}

    type Query {
        tequila(key: [String]): [Tequila]
    }
`);

const values = {
    tequila: async (args) => {
        return tequilasRef.once('value').then(snapshot => {
            var tequilas = snapshot.val();
            tequilas.filter(tequila => {
                return tequila.serial_numbers.some(serial => args.key.indexOf(serial) >= 0)
            })
        })
    }
}

app.get('/api', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))

const PORT = config.ports.getUserTequilas;
app.listen(PORT, console.log(`Running Get Provider Tequilas @ ${PORT}`));