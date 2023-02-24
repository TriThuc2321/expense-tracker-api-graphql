const ProductType = `
    type Product {
        _id: String!,
        name: String,
        price: Int,
        type: ProductType,
        buyer: User
    }
    
    extend type Query {
        products: [Product]
    }

    input ProductCreateInput {
        name: String!, typeId: String!, price: Int, buyer: String!
    }

    input ProductUpdateInput {
        _id: String!, name: String, typeId: String, price: Int, buyer: String
    }

    extend type Mutation {
        addProduct(data: ProductCreateInput ): Product,
        updateProduct(data: ProductUpdateInput): Product,
        deleteProduct(_id: String!): Message,
    }
`;

export default ProductType;
