const Queuee = require('firebase-queue');
const axios = require('axios');
const firebase = require('firebase-admin');
const serviceAccount = require('../ServiceKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const refQueue = firebase.database().ref("queue");


var queue = new Queuee(refQueue, {'numWorkers': 10}, function(data, progress, resolve, reject){
    progress(10);
    console.log(data.user)
    console.log(data.data.serial_num)
    var query = `
        mutation{
            history(uid: ${JSON.stringify(data.user)}, key:${JSON.stringify(data.data.serial_num)})
        }
        `
    
    axios.post(`http://localhost:5007?query=${query}`)
    .then(response => {
        if(response.data.data.history == "Success"){
            resolve()
        }else{
            reject()
        }
    }).catch(function (error) {
        console.log(error);
    }); 
})

