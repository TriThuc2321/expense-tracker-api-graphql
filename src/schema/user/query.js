import UserModel from './db.js';

const UserQuery = {
    user: async (parent, args) => {
        const { email } = args;
        const data = await UserModel.findOne({ email });
        return data;
    },
};

export default UserQuery;
