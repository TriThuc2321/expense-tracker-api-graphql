import ProductModel from '../product/db.js';

const resolver = {
    Bill: {
        generals: async (parent, args) => {
            const { _id } = parent;

            const products = ProductModel.find({ bill: _id, type: '63f79ef19d06dca6f9214ff6' }).populate('buyer');
            return products;
        },
        specifics: async (parent, args) => {
            const { _id } = parent;
            const products = ProductModel.find({ bill: _id, type: '63f79ef79d06dca6f9214ff8' }).populate('buyer');
            return products;
        },
    },
};

export default resolver;
