import WorkspaceModel from './db.js';

const WorkspaceQuery = {
    myWorkspaces: async (parent, args) => {
        const { userId } = args;

        const workspaces = await WorkspaceModel.find({ $or: [{ host: userId }, { collaborators: userId }] })
            .populate('host')
            .populate('collaborators')
            .sort({ updatedAt: 'desc' });
        return workspaces;
    },

    workspace: async (parent, args) => {
        const { _id } = args;
        const workspace = await WorkspaceModel.findById(_id).populate('host').populate('collaborators');

        return workspace;
    },
};

export default WorkspaceQuery;
