import { workspaces } from '../mock/index.js';

export const resolvers = {
    Query: {
        workspaces: async (parent, args, context) => workspaces,
    },
};
