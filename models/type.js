import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

const TypeModel = mongoose.model('Type', typeSchema);
export default TypeModel;
