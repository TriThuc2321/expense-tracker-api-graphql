export const typeDefs = `#graphql
    type User {
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
        createdAt: String,
        updatedAt: String
    }

    type Query {
        workspaces: [Workspace],
        workspace(workspaceId: String!): Workspace,
    }

    type Mutation {
        addUser(uid: String!, name: String!, picture: String, email: String!): User,
    }
`;
