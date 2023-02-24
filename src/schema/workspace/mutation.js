import WorkspaceModel from './db.js';

const WorkspaceMutation = {
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
};

export default WorkspaceMutation;
