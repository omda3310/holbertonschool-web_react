import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    notifications: {
      notifications: {
        1: { id: 1, value: "Notification 1", isRead: false },
        2: { id: 2, value: "Notification 2", isRead: true },
        3: { id: 3, value: "Notification 3", isRead: false }
      },
      filter: 'default'
    }
  });

  it('should return the filter type', () => {
    const filter = filterTypeSelected(initialState);
    expect(filter).toEqual('default');
  });

  it('should return the notifications', () => {
    const notifications = getNotifications(initialState);
    expect(notifications.toJS()).toEqual({
      1: { id: 1, value: "Notification 1", isRead: false },
      2: { id: 2, value: "Notification 2", isRead: true },
      3: { id: 3, value: "Notification 3", isRead: false }
    });
  });

  it('should return the unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(initialState);
    expect(unreadNotifications.toJS()).toEqual([
      { id: 1, value: "Notification 1", isRead: false },
      { id: 3, value: "Notification 3", isRead: false }
    ]);
  });
});
