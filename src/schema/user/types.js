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

    input UserCreateInput {
        uid: String!
        name: String!
        picture: String
        email: String!
    }

    extend type Mutation {
        addUser(data: UserCreateInput): User,
    }
`;

export default UserType;
