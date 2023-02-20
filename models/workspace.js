import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        bills: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bill',
        },
    },
    { timestamps: true },
);

const WorkspaceModel = mongoose.model('Workspace', workspaceSchema);
export default WorkspaceModel;
