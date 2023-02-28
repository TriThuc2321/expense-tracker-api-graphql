import BillModel from './../bill/db.js';

const resolver = {
    Workspace: {
        bills: async (parent, args) => {
            const { _id } = parent;

            const bills = BillModel.find({ workspace: _id }).populate('buyer').sort({
                updatedAt: 'desc',
            });

            return bills;
        },
    },
};

export default resolver;
