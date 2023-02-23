export const typeDefs = `#graphql
    type User {
        _id: String!,
        uid: String!,
        name: String,
        picture: String,
        email: String
    }

    type Product {
        _id: String!,
        name: String,
        price: Int,
        type: String,
        buyer: User
    }

    type Bill {
        _id: String!,
        host: User,
        products: [Product]
    }

    type Workspace {
        _id: String!,
        name: String,
        host: User,
        bills: [Bill],
        collaborators: [User],
        createdAt: String,
        updatedAt: String
    }

    type Query {
        myWorkspaces: [Workspace],
        workspace(_id: String!): Workspace,
        user(email: String!): User
    }

    type Mutation {
        addUser(uid: String!, name: String!, picture: String, email: String!): User,
        addWorkspace(name: String!, host: String!, collaborators: [String]): Workspace,
        updateWorkspace(_id: String!, name: String, collaborators: [String]): Workspace
    }
`;
