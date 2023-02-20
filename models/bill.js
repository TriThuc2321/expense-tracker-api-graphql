import mongoose from 'mongoose';

const billSchema = new mongoose.Schema(
    {
        host: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
        ],
    },
    { timestamps: true },
);

const BillModel = mongoose.model('Bill', billSchema);
export default BillModel;
