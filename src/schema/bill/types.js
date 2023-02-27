const BillType = `
    type Bill {
        _id: String!
        buyer: User
        specifics: [Product]
        generals: [Product]
    }

    input ProductInput {
        name: String!
        typeId: String!
        price: Int
        buyerId: String!
    }

    extend type Mutation {
        addBill(buyer: String!, workspaceId: String!, generals: [ProductInput], specifics: [ProductInput]): Bill
        updateBill(_id: String!, buyer: String!, productIds: [String]): Bill
        deleteBill(_id: String!, workspaceId: String!): Message
    }
`;

export default BillType;
