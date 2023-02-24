import ProductModel from './db.js';

const ProductQuery = {
    products: async (parent, args) => {
        const products = await ProductModel.find({}).populate('buyer').populate('type');
        return products;
    },
};

export default ProductQuery;
