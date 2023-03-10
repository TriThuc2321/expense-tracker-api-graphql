import { pubsub } from '../index.js';

const NotificationSubscription = {
    notification: {
        subscribe: () => pubsub.asyncIterator(['PUSH_NOTIFICATION']),
    },
};

export default NotificationSubscription;
