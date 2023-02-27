import BillModel from './../bill/db.js';

const resolver = {
    Workspace: {
        bills: async (parent, args) => {
            const { bills } = parent;

            const data = await Promise.all(
                bills.map(async (_id) => {
                    const bill = BillModel.findById(_id).populate('buyer').populate('generals').populate('specifics');
                    return bill;
                }),
            );

            return data;
        },
    },
};

export default resolver;
