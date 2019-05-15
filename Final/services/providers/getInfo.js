const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const Provider = require('../models/Provider');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');
const ProviderSchema = require('../schemas/Provider');

const app = express();
app.use(cors({ origin: '*' }));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const providerRef = db.ref('providers');

//nuestro schema, lo que puedes consultar
const schema1 = buildSchema(`
    ${ProviderSchema}

	type Query {
		provider(key: String): Provider
	}
`);

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	provider: (args) => {
        console.log(args.key);
        return providerRef.child(args.key).once('value').then(snapshot => {
            var provider = snapshot.val();
            var p = new Provider.Builder(
                provider.brand,
                provider.contact_mail,
                provider.contact_phone,
                provider.tequilas,
                args.key
            ).build()
            console.log("MY_PROVIDER", p)
            return p
        })
    }
}

app.use('/graphql', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: false
}));

const PORT = config.ports.getProviderInfo;
app.listen(PORT, () => {
    console.log(`Running Get Info Provider at ${PORT}`);
});
