module.exports = `
type History {
    serial_num : String!
    date_of_purchase: String!
}

type User {
    name: String
    lastName: String
    email: String
    tequilas: [History]
}

type Query {
    user(key: [String!]): [User]
}
`;