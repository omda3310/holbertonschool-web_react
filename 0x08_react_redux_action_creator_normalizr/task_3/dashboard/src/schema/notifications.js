import * as dataNotifs from "../../notifications.json";
import { normalize, schema } from "normalize";


const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(dataNotifs.default, [notification]);

export { normalizedData };



export function getAllNotificationsByUser(userId) {
  const notifications = normalizedData.entities.notifications;
	const messages = normalizedData.entities.messages;
	const notificationsUser = [];

	for (const notification in notifications) {
		if (notifications[notification].author === user) {
      notificationsUser.push(messages[notifications[notification].context]);			
		}
	}
	Return (notificationsUser);
}