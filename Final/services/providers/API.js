const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
const { buildSchema } = require('graphql');
const express_graphql = require('express-graphql');
const config = require('../config');
const providerSchema = require('../schemas/Provider');

const app = express();
app.use(cors({ origin: '*' }));

const schema = buildSchema(`
    ${providerSchema}

    type Query {
        get_info(key: String): Provider
    }
`);

const values = {
    get_info: async (args) => {
        var q = `{
            provider(key: ${JSON.stringify(args.key)}) {
                brand
                contact_mail
                contact_phone
                tequilas
                uuid
            }
        }`

        console.log(q)

        var r = await axios.get(`http://localhost:${config.ports.getProviderInfo}/graphql?query=${q}`);
        console.log(r.data);
        return r.data.data.provider
    }
}

app.get('/api', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))

const PORT = config.ports.providerAPI;
app.listen(PORT, console.log(`Running Provider API @ ${PORT}`));