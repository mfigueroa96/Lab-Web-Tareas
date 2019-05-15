const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');
const config = require('../config');
const Tequila = require('../models/Tequila');

const app = express();
app.use(cors({ origin: '*' }));

const schema = buildSchema(`
type Tequila {
    name: String
    alcohol_degrees: String
    purity: String
    date_of_release: String
    distillation: String
    year_of_distillation: String
    place_of_distillation: String
    serial_numbers: [String]
    uuid: String
    provider: String
    provider_uuid: String
    uuidType: String
}

    type Query {
        tequila(key: [String]): [Tequila]
        verify_tequila(key: String): Boolean
        from_user(key: [String]): [Tequila]
        from_provider(key: [String]): [Tequila]
    }
`);

const values = {
    tequila: async (args) => {
        tequilas= []
        var q = `{
        tequila(key: "${args.key}") {
                name
                alcohol_degrees
                purity
                date_of_release
                distillation
                year_of_distillation
                place_of_distillation
                uuid
                provider
                provider_uuid
            }
        }`
        
        var res = await axios.get(`http://localhost:${config.ports.getTequilaInfo}/graphql?query=${q}`)
        console.log(res.data.data.tequila)
        if( res.data.data.tequila[0] == null){
            tequilas.push(new Tequila.Builder(0,0,0,0,0,0,0,0,0,0)
            .build())
            return tequilas
        }
        return res.data.data.tequila
        
    },
    verify_tequila: async (args) => {
        var q = `{
            verify(key: ${args.key})
        }`

        var res = await axios.get(`http://localhost:${config.ports.verifyTequila}/graphql?query=${q}`)
        return res.data
    },
    from_user: async (args) => {
        var q = `{
            tequila(key: ${args.key}) {
                name
                alcohol_degrees
                purity
                date_of_release
                distillation
                year_of_distillation
                place_of_distillation
                uuid
            }
        }`

        var res = await axios.get(`http://localhost:${config.ports.getUserTequilas}/graphql?query=${q}`)
        return res.data
    },
    from_provider: async (args) => {
        var q = `{
            tequila(key: ${args.key}) {
                name
                alcohol_degrees
                purity
                date_of_release
                distillation
                year_of_distillation
                place_of_distillation
                uuid
            }
        }`

        var res = await axios.get(`http://localhost:${config.ports.getProvidersTequilas}/graphql?query=${q}`)
        return res.data
    }
}

app.use('/api', express_graphql({
	schema: schema,
	rootValue: values,
	graphiql: true
}));

const PORT = config.ports.tequilasAPI;
app.listen(PORT, () => {
    console.log(`Running Tequila API at ${PORT}`);
});