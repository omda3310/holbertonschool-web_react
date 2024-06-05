import * as dataNotifs from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
    return (dataNotifs.filter(notif => notif.author.id === userId)
	.map(notif => notif.context));
}
