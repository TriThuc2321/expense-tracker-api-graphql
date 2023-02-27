import mongoose from 'mongoose';

const billSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        generals: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Product',
        },
        specifics: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Product',
        },
    },
    { timestamps: true },
);

const BillModel = mongoose.model('Bill', billSchema);
export default BillModel;
