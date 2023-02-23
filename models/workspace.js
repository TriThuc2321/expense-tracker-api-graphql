import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        bills: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Bill',
        },
        collaborators: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User',
        },
    },
    { timestamps: true },
);

const WorkspaceModel = mongoose.model('Workspace', workspaceSchema);
export default WorkspaceModel;
