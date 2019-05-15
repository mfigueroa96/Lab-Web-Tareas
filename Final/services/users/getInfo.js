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

// https://medium.com/the-node-js-collection/rethinking-javascript-test-coverage-5726fb272949
// https://www.google.com/search?q=jasmine+code+coverage+report&rlz=1C5CHFA_enUS828US828&oq=jasmine+code+&aqs=chrome.2.69i57j0l5.5255j0j7&sourceid=chrome&ie=UTF-8
// https://www.manifold.co/blog/asynchronous-microservices-with-rabbitmq-and-node-js

// Firebase asíncrono
// https://github.com/FirebaseExtended/firebase-queue#downloading-firebase-queue
// https://howtofirebase.com/firebase-queue-practical-firestack-a9bba76514a9
// https://riptutorial.com/firebase/example/23751/firebase-queue-and-worker 
//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	user: (args) => {
        console.log(" getInfo "+args.key)
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

app.use('/', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: true
}));


app.listen(config.ports.getUserInfo, console.log('RUnning user Info '+config.ports.getUserInfo));