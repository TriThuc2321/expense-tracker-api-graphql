const BillType = `
    type Bill {
        _id: String!
        buyer: User
        specifics: [Product]
        generals: [Product]
        createdAt: Date
    }

    extend type Query {
        bills(workspaceId: String!): [Bill]
        bill(billId: String!): Bill
    }

    extend type Mutation {
        addBill(buyerId: String!, workspaceId: String!): Bill
        deleteBill(_id: String!): Message
    }
`;

export default BillType;
