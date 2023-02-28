import BillModel from './db.js';
import ProductModel from './../product/db.js';
import WorkspaceModel from './../workspace/db.js';

const BillMutation = {
    addBill: async (parent, args) => {
        const { buyerId, workspaceId } = args;
        const newBill = new BillModel({ buyer: buyerId, workspace: workspaceId });
        await newBill.save();

        return newBill;
    },

    deleteBill: async (parent, args) => {
        const { _id, workspaceId } = args;
        try {
            await BillModel.deleteOne({ _id });
            return { message: 'Delete bill successfully', type: 'SUCCESS' };
        } catch (err) {
            return { message: err.toString(), type: 'ERROR' };
        }
    },
};

export default BillMutation;
