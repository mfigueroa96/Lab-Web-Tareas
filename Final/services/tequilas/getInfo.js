const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const Tequila = require('../models/Tequila');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');
const TequilaSchema = require('../schemas/Tequila')

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
    ${TequilaSchema}

	type Query {
		tequila(key: [String!]): [Tequila]
	}
`);

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	tequila: (args) => {
        var users = []
        async function retrieve(key) {
            console.log("keey "+key)
            return tequilasRef.once('value').then(snapshot =>{
                var tequilas = snapshot.val()
                for(i in tequilas)
                {   
                    for(s in tequilas[i].serial_numbers){
                        if(tequilas[i].serial_numbers[s]==key){
                           var tequila = tequilas[i]
                            return new Tequila.Builder(tequila.name,
                                tequila.alcohol_degrees,
                                tequila.purity,
                                tequila.date_of_release,
                                tequila.distillation,
                                tequila.year_of_distillation,
                                tequila.place_of_distillation,
                                tequila.serial_numbers,
                                i,
                                tequila.provider,
                                tequila.provider_uuid)
                            .build()
                        }
                    }
                    
                }
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
	graphiql: true
}));

const PORT = config.ports.getTequilaInfo;
app.listen(PORT, () => {
    console.log(`Running Get Info Tequilas at ${PORT}`);
});
