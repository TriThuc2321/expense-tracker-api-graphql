import BillModel from './db.js';
import ProductModel from './../product/db.js';

const BillMutation = {
    addBill: async (parent, args) => {
        const { buyerId, workspaceId } = args;
        const newBill = new BillModel({ buyer: buyerId, workspace: workspaceId });
        await newBill.save();

        return newBill;
    },

    deleteBill: async (parent, args) => {
        const { billId } = args;
        try {
            await ProductModel.deleteMany({ bill: billId });
            await BillModel.deleteOne({ _id: billId });

            return { message: 'Delete bill successfully', type: 'SUCCESS' };
        } catch (err) {
            return { message: err.toString(), type: 'ERROR' };
        }
    },
};

export default BillMutation;
