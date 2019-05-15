module.exports = `
type User {
    name: String
    lastName: String
    email: String
    tequilas: [String]
}

type Query {
    user(key: [String!]): [User]
}
`;