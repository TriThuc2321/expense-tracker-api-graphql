const ProductType = `
    type Product {
        _id: String!
        name: String
        price: Int
        type: ProductType
        buyer: User
    }
    
    extend type Query {
        products: [Product]
    }

    extend type Mutation {
        addProduct(name: String!, typeId: String!, price: Int, buyerId: String!, billId: String!): Product,
        updateProduct(productId: String!, name: String, price: Int, buyerId: String): Product,
        deleteProduct(productId: String!): Message,
    }
`;

export default ProductType;
