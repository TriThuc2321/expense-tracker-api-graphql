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

    input WorkspaceCreateInput {
        name: String!
        host: String!
        collaborators: [String]
    }

    input WorkspaceUpdateInput {
        _id: String!
        name: String
        collaborators: [String]
    }

    extend type Mutation {
        addWorkspace(data: WorkspaceCreateInput): Workspace
        updateWorkspace(data: WorkspaceUpdateInput): Workspace
        deleteWorkspace(_id: String!): Message
    }
`;

export default WorkspaceType;
