import ProductModel from '../product/db.js';

const resolver = {
    Bill: {
        // generals: async (parent, args) => {
        //     const { generals } = parent;
        //     const products = await Promise.all(
        //         generals.map(async (_id) => {
        //             const product = await ProductModel.findById(_id);
        //             return product;
        //         }),
        //     );
        //     return products;
        // },
        // specifics: async (parent, args) => {
        //     const { specifics } = parent;
        //     const products = await Promise.all(
        //         specifics.map(async (_id) => {
        //             const product = await ProductModel.findById(_id);
        //             return product;
        //         }),
        //     );
        //     return products;
        // },
    },
};

export default resolver;
