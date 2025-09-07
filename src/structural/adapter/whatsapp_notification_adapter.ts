import INotificationSender from "./notification_sender";
import WhatsAppNotification from "./whatsapp_notification";

export default class WhatsappNotificationAdapter implements INotificationSender {
  public whatsAppNotification: WhatsAppNotification;

  constructor(notification: WhatsAppNotification) {
    this.whatsAppNotification = notification;
  }

  send(): void {
    this.whatsAppNotification.sendMessage();
  }
}
