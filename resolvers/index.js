import { GraphQLError } from 'graphql';

import { UserModel, WorkspaceModel } from './../models/index.js';

export const resolvers = {
    Query: {
        myWorkspaces: async (parent, args, context) => {
            const { email } = context;

            const workspaces = await WorkspaceModel.find({ email }).populate('host').populate('collaborators');
            return workspaces;
        },
        workspace: async (parent, args) => {
            const { _id } = args;
            const workspace = await WorkspaceModel.findById(_id).populate('host').populate('collaborators');

            return workspace;
        },
        user: async (parent, args) => {
            const { email } = args;
            const data = await UserModel.findOne({ email });
            return data;
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const { email } = args;
            const data = await UserModel.findOne({ email });

            if (!data) {
                const { uid, name, email, picture } = args;
                const newUser = new UserModel(uid, name, email, picture);
                await newUser.save();
                return newUser;
            } else {
                // throw new GraphQLError('Email already used');

                const user = await UserModel.findOneAndUpdate({ email }, { ...args });
                return user;
            }
        },

        addWorkspace: async (parent, args) => {
            const { name, host, collaborators } = args;
            const newWorkspace = new WorkspaceModel({ host, name, collaborators });
            await newWorkspace.save();
            return newWorkspace;
        },

        updateWorkspace: async (parent, args) => {
            const { _id, name, collaborators } = args;
            const workspace = await WorkspaceModel.findOneAndUpdate({ _id }, { name, collaborators }, { new: true })
                .populate('host')
                .populate('collaborators');
            return workspace;
        },
    },
};
