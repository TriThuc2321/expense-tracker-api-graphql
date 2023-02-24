import mongoose from 'mongoose';

const billSchema = new mongoose.Schema(
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
);

const BillModel = mongoose.model('Bill', billSchema);
export default BillModel;
