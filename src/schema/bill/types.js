const BillType = `
    type Bill {
        _id: String!
        buyer: User
    }

    extend type Mutation {
        addBill(buyer: String!, workspaceId: String!): Bill
        updateBill(_id: String!, buyer: String!): Bill
        deleteBill(_id: String!, workspaceId: String!): Message
    }
`;

export default BillType;
