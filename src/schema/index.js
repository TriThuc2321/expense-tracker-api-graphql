import { UserTypes, UserQuery, UserMutation } from './user/index.js';
import { WorkspaceTypes, WorkspaceQuery, WorkspaceMutation } from './workspace/index.js';
import { ProductTypes, ProductQuery, ProductMutation } from './product/index.js';
import { ProductTypeTypes, ProductTypeQuery, ProductTypeMutation } from './productType/index.js';

export const typeDefs = `#graphql
    type Query
    type Mutation
    type Message {
        message: String,
        type: String
    }
    

    

    type Bill {
        _id: String!,
        host: User,
        products: [Product]
    }
    ${UserTypes}
    ${WorkspaceTypes}
    ${ProductTypes}
    ${ProductTypeTypes}
`;
export const resolvers = {
    Query: {
        ...UserQuery,
        ...WorkspaceQuery,
        ...ProductQuery,
        ...ProductTypeQuery,
    },
    Mutation: {
        ...UserMutation,
        ...WorkspaceMutation,
        ...ProductMutation,
        ...ProductTypeMutation,
    },
};
