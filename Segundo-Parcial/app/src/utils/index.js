var request = require("request");

export  async function obtener(people) {
    try {
        let resultado ='';
          fetch('https://swapi.co/api/people/'+people+'/').then((response)=> {
           console.log(response);
           resultado =   response;

       });
          console.log(resultado);
          return resultado
    } catch (err) {
        console.error(err);
    }
};