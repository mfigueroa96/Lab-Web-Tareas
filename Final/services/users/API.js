//instancia de express
const express = require('express');
const app = express();
//modulo de graphql
const express_graphql =require('express-graphql');
//modulo de escritura de esquemas
const { buildSchema } = require('graphql');
const firebase = require('firebase-admin');
//Modulo de integración de datos

const serviceAccount = require('../ServiceKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const db = firebase.database();
const usersRef = db.ref('users');

//nuestro schema, lo que puedes consultar
const schema1 = buildSchema(`
	type Query {
		message: String
	}	
`);

let getUser = (args) =>{args.name; args.lastName;args.email}

//valor root, decir que puede consultar de los datos en forma de funciones(como lo puedes consultar)
const root1 = {
	message: () => {
        // var r = usersRef.on('value', snapshot => {
        //     var users = snapshot.val();
        //     return users['82fLvk1h9MfwO7RwlQkCutDYrlH3'].name
        // });
        // return usersRef.child('82fLvk1h9MfwO7RwlQkCutDYrlH3').ref.path.app.toString()

        return usersRef.child('82fLvk1h9MfwO7RwlQkCutDYrlH3').once('value').then(snapshot => {
            return snapshot.val().name
        })
    }
    // message: () => {
    //     getUser()
    // }
}
//Para hacer consultas
app.use('/graphql', express_graphql({
//Hay buildear el formato de los datos
	schema: schema1,
	 rootValue: root1,
	 graphiql: false
}));
//Inicio servidor en puerto 3000
app.listen(5002, ()=>console.log('server on port 5002')); 