const UserType = `
    type User {
        _id: String!
        uid: String!
        name: String
        picture: String
        email: String
    }
    
    extend type Query {
        user(email: String!): User
    }

    extend type Mutation {
        addUser( uid: String!, name: String!, picture: String, email: String!): User,
    }
`;

export default UserType;
