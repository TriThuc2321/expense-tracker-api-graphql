const ProductType = `
    type ProductType {
        _id: String!
        name: String!
    }
    
    extend type Query {
        productTypes: [ProductType],
    }

    extend type Mutation {
        addProductType(name: String!): ProductType,
    }
`;

export default ProductType;
