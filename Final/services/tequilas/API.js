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
    ${require('../schemas/Tequila')}

    type Query {
        tequila(key: [String!]): [Tequila]
        verify_tequila(key: String): Boolean
    }
`);

const values = {
    tequila: (args) => {

    },
    verify_tequila: (args) => {
        
    }
}

app.get('/api', express_graphql({
    schema: schema,
    rootValue: values,
    graphiql: false
}))