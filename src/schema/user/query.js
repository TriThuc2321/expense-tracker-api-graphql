import UserModel from './db.js';
import WorkspaceModel from './../workspace/db.js';

const UserQuery = {
    user: async (parent, args) => {
        const { email } = args;
        const data = await UserModel.findOne({ email });
        return data;
    },

    collaborators: async (parent, args) => {
        const { workspaceId } = args;
        const data = await WorkspaceModel.findById(workspaceId).populate('collaborators');
        return data.collaborators;
    },
};

export default UserQuery;
