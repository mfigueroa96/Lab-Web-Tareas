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
        tequila(key: [String]): [Tequila]
    }
`);

const values = {
    tequila: async (args) => {
        var keys = [...args.key];
        // console.log('TEQUILA_FROM_USER_ARGS', args);
        return tequilasRef.once('value').then(snapshot => {
            var tequilas = snapshot.val();
            var response = []
            for (const tequilaKey in tequilas) {
                if (keys.includes(tequilaKey)) {
                    var temp = {...tequilas[tequilaKey]};
                    temp.uuid = tequilaKey;
                    response.push(temp);
                }
            }
            
            return response
        })
    }
}

app.get('/graphql', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))

onst PORT = config.ports.getProvidersTequilas;
app.listen(PORT, () => {
    console.log(`Running Provider's tequilas at ${PORT}`);
});
