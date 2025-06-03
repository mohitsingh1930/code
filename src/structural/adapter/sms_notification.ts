import INotification from './notification';
import INotificationSender from './notification_sender';

export default class SmsNotification implements INotification, INotificationSender {
  private phoneNumber: string;
  public message: string;

  constructor(phoneNumber: string, message: string) {
    this.phoneNumber = phoneNumber;
    this.message = message;
  }

  send(): void {
    console.log(`Sending SMS to ${this.phoneNumber}: ${this.message}`);
  }
}
