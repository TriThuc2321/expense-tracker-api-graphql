import ProductTypeModel from './db.js';

const ProductTypeMutation = {
    addProductType: async (parent, args) => {
        const { name } = args;

        const newProductType = new ProductTypeModel({ name });
        await newProductType.save();
        return newProductType;
    },
};

export default ProductTypeMutation;
