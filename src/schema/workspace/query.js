import WorkspaceModel from './db.js';

const WorkspaceQuery = {
    myWorkspaces: async (parent, args, context) => {
        const { email } = context;

        const workspaces = await WorkspaceModel.find({ email })
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
