import BillModel from './db.js';
import ProductModel from './../product/db.js';
import WorkspaceModel from './../workspace/db.js';

const BillMutation = {
    addBill: async (parent, args) => {
        const { buyer, workspaceId } = args;
        const newBill = new BillModel({ buyer });
        await newBill.save();

        await WorkspaceModel.findByIdAndUpdate(workspaceId, { $push: { bills: newBill._id } }, { new: true });
        return newBill.populate('buyer');
    },

    updateBill: async (parent, args) => {
        const { _id, buyer } = args;
        const bill = await BillModel.findOneAndUpdate({ _id }, { buyer }, { new: true }).populate('buyer');
        return bill;
    },

    deleteBill: async (parent, args) => {
        const { _id, workspaceId } = args;
        try {
            await BillModel.deleteOne({ _id });
            await WorkspaceModel.findByIdAndUpdate(workspaceId, { $pull: { bills: _id } });
            return { message: 'Delete bill successfully', type: 'SUCCESS' };
        } catch (err) {
            return { message: err.toString(), type: 'ERROR' };
        }
    },
};

export default BillMutation;
