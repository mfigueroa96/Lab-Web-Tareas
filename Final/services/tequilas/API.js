const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');
const config = require('../config');

const app = express();
app.use(cors({ origin: '*' }));

const schema = buildSchema(`
    ${require('../schemas/Tequila')}

    type Query {
        tequila(key: [String]): [Tequila]
        verify_tequila(key: String): Boolean
        from_user(key: [String]): [Tequila]
        from_provider(key: [String]): [Tequila]
    }
`);

const values = {
    tequila: async (args) => {
        var q = `{
            tequila(key: ${args.key}) {
                name
                alcohol_degrees
                purity
                date_of_release
                distillation
                year_of_distillation
                place_of_distillation
            }
        }`

        var res = await axios.get(`http://localhost:${config.ports.tequilasGetInfo}/graphql?query=${q}`)
        return res.data
        
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
            }
        }`

        var res = await axios.get(`http://localhost:${config.ports.getProvidersTequilas}/graphql?query=${q}`)
        return res.data
    }
}

app.get('/api', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))