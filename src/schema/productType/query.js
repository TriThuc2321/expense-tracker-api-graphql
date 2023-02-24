import ProductType from './db.js';

const ProductTypeQuery = {
    productTypes: async (parent, args) => {
        const types = await ProductType.find({});
        return types;
    },
};

export default ProductTypeQuery;
