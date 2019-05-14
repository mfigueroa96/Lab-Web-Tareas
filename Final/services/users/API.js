const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const User = require('../models/User');
const History = require('../models/History');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');

const app = express();
app.use(cors({ origin: '*' }));

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const refQueue = firebase.database().ref("queue/tasks");
const db = firebase.database();
const usersRef = db.ref('users');

//nuestro schema, lo que puedes consultar
const schema1 = buildSchema(`
    type User {
        name: String
        lastName: String
        email: String
        tequilas: [String]
    }

	type Query {
		user(key: [String!]): [User]
	}	
`);

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	user: (args) => {
        var users = []
        async function retrieve(key) {
            return usersRef.child(key).once('value').then(snapshot => {
                var user = snapshot.val()
                return new User.Builder(user.name, user.lastName, user.email).build()
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

app.get('/addTequilaToUser/:uid/:key',(req, res) =>{
    var history = new History.Builder(req.params.key, new Date().toString()).build()
    refQueue.push({ 
        case: "ADD_TEQUILA", 
        user: req.params.uid, 
        data: history
    },function(error){
        if(error){
            res.send({completion: "Failed to complete action"});
        }else{
            res.send({completion: "Tequila added to queue"});
        }
    });

})

app.listen(config.ports.tequilasAPI, () => {});