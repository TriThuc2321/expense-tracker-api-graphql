const NotificationType = `
    extend type Mutation {
        pushNotification(content: String): Message
    }
    extend type Subscription {
        notification: Message
      }
`;

export default NotificationType;
