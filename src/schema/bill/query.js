import BillModel from './db.js';

const BillQuery = {
    bills: async (parent, args) => {
        const { workspaceId } = args;

        const bills = await BillModel.find({ workspace: workspaceId }).populate('buyer').sort({ updatedAt: 'desc' });
        return bills;
    },

    bill: async (parent, args) => {
        const { billId } = args;

        const bill = await BillModel.findById(billId).populate('buyer');
        return bill;
    },
};

export default BillQuery;
