import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        },
        picture: {
            type: String,
        },
    },
    { timestamps: true },
);

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
