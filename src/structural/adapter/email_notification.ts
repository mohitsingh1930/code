import INotification from "./notification";
import INotificationSender from "./notification_sender";

export default class EmailNotification implements INotification, INotificationSender {
  private emailAddress: string;
  public message: string;

  constructor(emailAddress: string, message: string) {
    this.emailAddress = emailAddress;
    this.message = message;
  }

  send(): void {
    console.log(`Sending email to ${this.emailAddress}: ${this.message}`);
  }
}
