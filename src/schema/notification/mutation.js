import NotificationModel from './db.js';
import { pubsub } from '../index.js';

const NotificationMutation = {
    pushNotification: async (parent, args) => {
        const { content } = args;
        const newNotification = new NotificationModel({ content });

        pubsub.publish('PUSH_NOTIFICATION', {
            notification: {
                message: content,
                type: 'SUCCESS',
            },
        });

        await newNotification.save();
        return { message: 'Push notification successfully', type: 'SUCCESS' };
    },
};

export default NotificationMutation;
