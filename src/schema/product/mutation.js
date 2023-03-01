import ProductModel from './db.js';

const ProductMutation = {
    addProduct: async (parent, args) => {
        const { name, price, typeId, buyerId, billId } = args;
        const newProduct = new ProductModel({ name, price, type: typeId, buyer: buyerId, bill: billId });
        await newProduct.save();
        return newProduct.populate('buyer');
    },

    updateProduct: async (parent, args) => {
        const { productId, name, price, buyerId } = args;
        const product = await ProductModel.findOneAndUpdate(
            { _id: productId },
            { name, price, buyer: buyerId },
            { new: true },
        )
            .populate('buyer')
            .populate('type');
        return product;
    },

    deleteProduct: async (parent, args) => {
        const { productId } = args;
        try {
            await ProductModel.deleteOne({ _id: productId });
            return { message: 'Delete product successfully', type: 'SUCCESS' };
        } catch (err) {
            return { message: err.toString(), type: 'ERROR' };
        }
    },
};

export default ProductMutation;
