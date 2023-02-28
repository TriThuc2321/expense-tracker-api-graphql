import BillModel from './db.js';

const BillQuery = {
    bills: async (parent, args) => {
        const { workspaceId } = args;

        const bills = await BillModel.find({ workspace: workspaceId }).populate('buyer');
        return bills;
    },
};

export default BillQuery;
