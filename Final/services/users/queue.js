const Queue = require('firebase-queue');
const axios = require('axios');
const firebase = require('firebase-admin');
const serviceAccount = require('../ServiceKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://labweb-239421.firebaseio.com'
});

const refQueue = firebase.database().ref("queue");


module.exports = new Queue(refQueue, function(data, progress, resolve, reject){
    console.log("from queue "+data.user)
    console.log("from queue "+data.data.serial_num)
    var query = `
        mutation{
            history(uid:"${data.user}", key:"${data.data.serial_num}")
        }
        `
    console.log("from queue "+`http://localhost:5006/api?query=${query}`)
    axios.post(`http://localhost:5006/api?query=${query}`)
    .then(response => {
        console.log(response.data)
        if(response.data.data.history == "Success"){
            resolve()
        }else{
            reject()
        }
    }).catch(function (error) {
        console.log(error);
    }); 
})
