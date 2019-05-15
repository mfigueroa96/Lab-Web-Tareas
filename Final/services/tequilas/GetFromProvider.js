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
    type Query {
        verify(key: String): Boolean
    }
`);

const values = {
    tequila: async (args) => {
        var q = `{
            info(key: ${args.key})
        }`

        var res = await axios.get(`http://localhost:${config.ports.tequilasGetInfo}/graphql?query=${q}`)
        return res.data
    }
}

app.get('/graphql', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))

onst PORT = config.ports.getProvidersTequilas;
app.listen(PORT, () => {
    console.log(`Running Provider's tequilas at ${PORT}`);
});