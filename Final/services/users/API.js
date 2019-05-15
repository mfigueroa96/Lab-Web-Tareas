const express = require('express');
const cors = require('cors');
const express_graphql =require('express-graphql');
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
const User = require('../models/User');
const History = require('../models/History');
const serviceAccount = require('../ServiceKey.json');
const config = require('../config');
const axios = require('axios').default;

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const refQueue = firebase.database().ref("queue/tasks");
const db = firebase.database();

const app = express();
app.use(cors({ origin: '*' }));

const schema1 = buildSchema(`
    type User {
        name: String
        lastName: String
        email: String
        tequilas: [String]
    }
    
    type Query{
        user(key: String!): [User]
        addTequila(uid: String!, key: String!): Boolean!
    }  	
    type History {
        serial_num : String!
        date_of_purchase: String!
    }
    `);


const root1 = {
	user: async (args) => {
        console.log(args.key)
	    var query = `{
            user(key: ["${args.key}"]) {
                name
                lastName
                email
            }
        }`
        var res = await axios.get(`http://localhost:${config.ports.getUserInfo}/graphql?query=${query}`)
        return res.data.data.user
    },
    addTequila: async (args)=>{
        var history = new History.Builder(args.key, new Date().toString()).build()
        var completion = true;
        async function pushToQueue(){
           await refQueue.push({ 
                case: "ADD_TEQUILA", 
                user: args.uid, 
                data: history
            },function(error){
                if(error){
                   completion = false;
                }
            });
            return completion
        }
        return pushToQueue()
    }
}

app.use('/api', express_graphql({
	schema: schema1,
	rootValue: root1,
	graphiql: false
}));

app.listen(config.ports.usersAPI, console.log('RUnning usersAPI '+config.ports.usersAPI));