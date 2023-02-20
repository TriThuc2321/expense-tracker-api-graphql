import { GraphQLError } from 'graphql';

import { workspaces } from '../mock/index.js';
import { UserModel } from './../models/index.js';

export const resolvers = {
    Query: {
        workspaces: async (parent, args, context) => workspaces,
        workspace: async (parent, args) => {
            const { workspaceId } = args;
            // const foundFolder = await FolderModel.findById(folderId);
            return workspaces.find((e) => e._id == workspaceId);
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const { email } = args;
            const user = UserModel.find({ email });
            if (!user) {
                const newUser = new UserModel(args);
                await newUser.save();
                return newUser;
            } else {
                throw new GraphQLError('Email already used');
            }
        },
    },
};
