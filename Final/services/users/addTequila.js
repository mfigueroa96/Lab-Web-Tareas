const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const History = require('../models/History');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');

const app = express();
app.use(cors({origin: '*'}));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const userRef = db.ref('users');

addTequilaToUser = function(uid, tequilakey){

}
const schema1 = buildSchema(` 
    type Query{
        histories: String!
    }  
    type Mutation {
		history(uid: String!, key: String!) : String!
    }	
    type History {
        serial_num : String!
        date_of_purchase: String!
    }
`);

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
    histories: () => `historyyy`,
    history: (args) => {
        var h = new History.Builder(args.key, (new Date()).toString()).build()
        var completion = "";
        console.log(args.uid)
        console.log(args.key)
        async function addToDatabase(){
            await userRef.child(args.uid).child("tequilas").push(h, 
                function(error) {
                if (error) {
                  completion = "Failed"
                } else {
                  completion = "Success"
                }
            });
            return completion
        }
        return addToDatabase()
    }
}

app.use('/api', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: false
}));

app.listen(config.ports.addTequilaAPI, () => {});
