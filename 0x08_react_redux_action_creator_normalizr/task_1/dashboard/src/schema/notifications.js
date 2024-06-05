import * as dataNotifs from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
    return (dataNotifs.filter(notif => notif.author.id === userId)
	.map(notif => notif.context));
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(dataNotifs.default, [notification]);

export { normalizedData };
