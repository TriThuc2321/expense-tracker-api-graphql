import UserModel from './db.js';

const UserMutation = {
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
};

export default UserMutation;
