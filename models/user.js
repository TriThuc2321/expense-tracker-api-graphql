import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
        },
    },
    { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
