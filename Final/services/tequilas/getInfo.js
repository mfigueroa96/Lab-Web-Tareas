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
    ${require('../schemas/Tequila')}

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
                return new Tequila.Builder(tequila.name,
                    tequila.alcohol_degrees,
                    tequila.purity,
                    tequila.date_of_release,
                    tequila.distillation,
                    tequila.year_of_distillation,
                    tequila.place_of_distillation,
                    tequila.serial_numbers)
                .build()
            })
        }

        args.key.forEach(key => {
            var u = retrieve(key);
            users.push(u);
        })
        
        return users
    }
}

app.use('/graphql', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: false
}));

const PORT = config.ports.tequilasGetInfo;
app.listen(PORT, () => {
    console.log(`Running Get Info Tequilas at ${PORT}`);
}); 
