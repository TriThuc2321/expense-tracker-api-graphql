import ProductModel from './db.js';

const ProductMutation = {
    addProduct: async (parent, args) => {
        const { name, price, typeId, buyer } = args;
        const newProduct = new ProductModel({ name, price, type: typeId, buyer });
        await newProduct.save();
        return newProduct;
    },

    updateProduct: async (parent, args) => {
        const { _id, name, price, type, buyer } = args;
        const product = await ProductModel.findOneAndUpdate({ _id }, { name, price, type, buyer }, { new: true })
            .populate('buyer')
            .populate('type');
        return product;
    },

    deleteProduct: async (parent, args) => {
        const { _id } = args;
        try {
            await ProductModel.deleteOne({ _id });
            return { message: 'Delete product successfully', type: 'SUCCESS' };
        } catch (err) {
            return { message: err.toString(), type: 'ERROR' };
        }
    },
};

export default ProductMutation;
