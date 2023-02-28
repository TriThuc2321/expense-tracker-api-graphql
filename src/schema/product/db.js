import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        buyer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductType',
        },
        bill: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bill',
        },
    },
    { timestamps: true },
);

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
