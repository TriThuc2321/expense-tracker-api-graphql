import { GraphQLError } from 'graphql';

import { UserModel, WorkspaceModel, ProductTypeModel, ProductModel } from './../models/index.js';

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

        products: async (parent, args) => {
            const products = await ProductModel.find({}).populate('buyer').populate('type');
            return products;
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

        deleteWorkspace: async (parent, args) => {
            const { _id } = args;
            try {
                await WorkspaceModel.deleteOne({ _id });
                return { message: 'Delete workspace successfully', type: 'SUCCESS' };
            } catch (err) {
                return { message: err.toString(), type: 'ERROR' };
            }
        },

        addProductType: async (parent, args) => {
            const { name } = args;

            const newProductType = new ProductTypeModel({ name });
            await newProductType.save();
            return newProductType;
        },

        addProduct: async (parent, args) => {
            const { name, price, typeId, buyer } = args;
            const newProduct = new ProductModel({ name, price, type: typeId, buyer });
            await newProduct.save();
            return newProduct;
        },

        updateProduct: async (parent, args) => {
            const { _id, name, price, type, buyer } = args;
            const product = await ProductModel.findOneAndUpdate({ _id }, { name, price, type, buyer }, { new: true })
                .populate('buyer')
                .populate('type');
            return product;
        },

        deleteProduct: async (parent, args) => {
            const { _id } = args;
            try {
                await ProductModel.deleteOne({ _id });
                return { message: 'Delete product successfully', type: 'SUCCESS' };
            } catch (err) {
                return { message: err.toString(), type: 'ERROR' };
            }
        },
    },
};
