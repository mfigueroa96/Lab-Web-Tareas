const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const Tequila = require('../models/Tequila');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');

const app = express();
app.use(cors({ origin: '*' }));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const tequilasRef = db.ref('tequilas');

//nuestro schema, lo que puedes consultar
const schema1 = buildSchema(`
    type Tequila {
        name: String
        alcohol_degrees: String
        purity: String
        date_of_release: String
        distillation: String
        year_of_distillation: String
        place_of_distillation: String
    }

	type Query {
		tequila(key: [String!]): [Tequila]
	}	
`);

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	tequila: (args) => {
        var users = []
        async function retrieve(key) {
            return tequilasRef.child(key).once('value').then(snapshot => {
                var tequila = snapshot.val()
                return new Tequila.Builder().build()
            })
        }

        args.key.forEach(key => {
            var u = retrieve(key);
            users.push(u);
        })
        
        return users
    }
}

app.use('/api', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: false
}));

app.listen(config.ports.tequilasGetInfo, () => {}); 