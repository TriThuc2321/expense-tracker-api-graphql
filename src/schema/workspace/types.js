const WorkspaceType = `
    type Workspace {
        _id: String!,
        name: String,
        host: User,
        bills: [Bill],
        collaborators: [User],
        createdAt: String,
        updatedAt: String
    }
    
    extend type Query {
        myWorkspaces: [Workspace],
        workspace(_id: String!): Workspace,
    }

    extend type Mutation {
        addWorkspace(name: String! , host: String!, collaborators: [String]): Workspace
        updateWorkspace(_id: String!, name: String, collaborators: [String]): Workspace
        deleteWorkspace(_id: String!): Message
    }
`;

export default WorkspaceType;
