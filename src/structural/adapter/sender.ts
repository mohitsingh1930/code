import INotificationSender from "./notification_sender";
export default class Sender {
  private notifications: INotificationSender[];

  constructor(notifications: INotificationSender[]) {
    this.notifications = notifications;
  }

  sendNotifications(): void {
    console.log("Sending notification...");
    for (const notification of this.notifications) {
      notification.send();
    }
  }
}
