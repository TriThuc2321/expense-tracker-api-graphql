import BillModel from './db.js';
import ProductModel from './../product/db.js';
import WorkspaceModel from './../workspace/db.js';

const BillMutation = {
    addBill: async (parent, args) => {
        const { buyer, generals, specifics, workspaceId } = args;

        const generalIds = await Promise.all(
            generals.map(async (product) => {
                const { name, price, typeId, buyerId } = product;
                const newProduct = new ProductModel({ name, price, type: typeId, buyer: buyerId });
                await newProduct.save();
                return newProduct._id;
            }),
        );

        const specificIds = await Promise.all(
            specifics.map(async (product) => {
                const { name, price, typeId, buyerId } = product;
                const newProduct = new ProductModel({ name, price, type: typeId, buyer: buyerId });
                await newProduct.save();
                return newProduct._id;
            }),
        );
        const newBill = new BillModel({ buyer, generals: generalIds, specifics: specificIds });

        await newBill.save();

        await WorkspaceModel.findByIdAndUpdate(workspaceId, { $push: { bills: newBill._id } }, { new: true });
        return newBill;
    },

    updateBill: async (parent, args) => {
        const { _id, buyer, generalIds, specificIds } = args;
        const bill = await BillModel.findOneAndUpdate(
            { _id },
            { buyer, generals: generalIds, specifics: specificIds },
            { new: true },
        );
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
