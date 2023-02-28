import { GraphQLScalarType } from 'graphql';

import { UserTypes, UserQuery, UserMutation } from './user/index.js';
import { WorkspaceTypes, WorkspaceQuery, WorkspaceMutation, WorkspaceResolver } from './workspace/index.js';
import { ProductTypes, ProductQuery, ProductMutation } from './product/index.js';
import { ProductTypeTypes, ProductTypeQuery, ProductTypeMutation } from './productType/index.js';
import { BillTypes, BillQuery, BillMutation, BillResolver } from './bill/index.js';

export const typeDefs = `#graphql
    scalar Date
    type Query
    type Mutation
    type Message {
        message: String,
        type: String
    }
    ${UserTypes}
    ${WorkspaceTypes}
    ${ProductTypes}
    ${ProductTypeTypes}
    ${BillTypes}
`;
export const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        parseValue(value) {
            return new Date(value);
        },
        serialize(value) {
            return value.toISOString();
        },
    }),
    Query: {
        ...UserQuery,
        ...WorkspaceQuery,
        ...ProductQuery,
        ...ProductTypeQuery,
        ...BillQuery,
    },
    Mutation: {
        ...UserMutation,
        ...WorkspaceMutation,
        ...ProductMutation,
        ...ProductTypeMutation,
        ...BillMutation,
    },
    ...BillResolver,
    ...WorkspaceResolver,
};
